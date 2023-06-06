export class AlgorithmService {
    rootStep!: jsonStep;
    currentStep!: jsonStep;
    constructor(json: jsonStep) {
        this.rootStep = json;
        this.currentStep = this.rootStep;
    }
    FindSuitableSystemResponse(userInput: string): jsonStep[] {
        console.log(this.currentStep);
        console.log(userInput);
        
        let foundChild = this.currentStep;
        let jsonSteps: jsonStep[] = [];

        if (this.currentStep != this.rootStep) {
            console.log(this.currentStep);
            while (this.currentStep?.children[0].data?.Type == "system") this.currentStep = this.currentStep.children[0];

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
                console.log(wordToLookFor);
                console.log(userInput);
                
                if (userInput.toLowerCase().includes(wordToLookFor)) startFlow = true;
                console.log(startFlow);
                
            })
            if (startFlow) {
                let currentSystemResponse = this.currentStep?.children[0];
                while (currentSystemResponse?.data?.Type == "system") {
                    jsonSteps.push(currentSystemResponse);
                    currentSystemResponse = currentSystemResponse.children[0];
                }
                this.currentStep = currentSystemResponse;
            } else {
                this.currentStep = this.rootStep;
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