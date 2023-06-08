export class AlgorithmService {
    rootStep!: jsonStep;
    currentStep!: jsonStep;
    constructor(json: jsonStep) {
        this.rootStep = json;
        this.currentStep = this.rootStep;
    }
    FindSuitableSystemResponse(userInput: string): jsonStep[] {
        let foundChild = this.currentStep;
        let jsonSteps: jsonStep[] = [];

        if (this.currentStep != this.rootStep) {
            while (this.currentStep?.children[0]?.data?.Type == "system") this.currentStep = this.currentStep.children[0];

            let highestCorrespondingWordCount = 0;

            this.currentStep?.children.forEach(childStep => {
                let currentStepCorrespondingWordsCount = 0;

                let words = childStep.data?.Content?.toLowerCase().replace(/\s/g, "").split(",");

                words?.forEach(wordToLookFor => {
                    if (userInput.includes(wordToLookFor)) currentStepCorrespondingWordsCount++;
                })

                if (currentStepCorrespondingWordsCount > highestCorrespondingWordCount) {
                    foundChild = childStep;
                    highestCorrespondingWordCount = currentStepCorrespondingWordsCount;
                }

            })

            let currentSystemResponse = foundChild?.children[0];

            while (currentSystemResponse?.data?.Type == "system") {
                jsonSteps.push(currentSystemResponse);
                currentSystemResponse = currentSystemResponse.children[0];
            }
            this.currentStep = foundChild;
        } else {

            let words = this.currentStep?.data?.Content?.toLowerCase().replace(/\s/g, "").split(",");

            let startFlow = false;
            words?.forEach(wordToLookFor => {
                if (userInput.toLowerCase().includes(wordToLookFor)) startFlow = true;
            })
            if (startFlow) {
                let currentSystemResponse = this.currentStep?.children[0];
                while (currentSystemResponse?.data?.Type == "system") {
                    jsonSteps.push(currentSystemResponse);
                    this.currentStep = currentSystemResponse;
                    currentSystemResponse = currentSystemResponse.children[0];
                }
            } else {
                this.currentStep = this.rootStep;
            }
        }
        if (jsonSteps.length == 0) {
            let dontHaveResponse = new jsonStep();
            let dontHaveResponseData = new dataOfItem();

            dontHaveResponseData.Type = "system";
            dontHaveResponseData.Content = "Sorry, your request is not recognised!";
            dontHaveResponse.data = dontHaveResponseData;

            jsonSteps.push(dontHaveResponse)

            dontHaveResponse = new jsonStep();
            dontHaveResponseData = new dataOfItem();

            dontHaveResponseData.Type = "system";
            dontHaveResponseData.Content = "Try responding using these words: \n"
            if (this.currentStep != this.rootStep) {

                this.currentStep.children.forEach((childStep) => {
                    childStep.data?.Content?.replace(/\s/g, "").split(",").forEach((word) => {
                        dontHaveResponseData.Content += word.substring(0, 1).toUpperCase() + word.substring(1).toLocaleLowerCase();
                        if (childStep.data?.Content?.split(",").length! > 1) dontHaveResponseData.Content += ", "
                    })
                });
                dontHaveResponse.data = dontHaveResponseData;

                jsonSteps.push(dontHaveResponse)
            } else {
                this.currentStep.data?.Content?.replace(/\s/g, "").split(",").forEach((word) => {
                    dontHaveResponseData.Content += word.substring(0, 1).toUpperCase() + word.substring(1).toLocaleLowerCase();
                    if (this.currentStep.data?.Content?.split(",").length! > 1) dontHaveResponseData.Content += ", "
                })
                dontHaveResponse.data = dontHaveResponseData;

                jsonSteps.push(dontHaveResponse)
            }
        }
        return jsonSteps;
    }
}

class jsonStep {
    id: number = 0;
    type?: string;
    data?: dataOfItem;
    children: jsonStep[] = []
}
class dataOfItem {
    Title?: string;
    Type?: string;
    Content?: string;
}