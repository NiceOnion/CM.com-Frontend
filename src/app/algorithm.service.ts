export class AlgorithmService {
    rootStep?: jsonStep;
    currentStep?: jsonStep;
    constructor(json: jsonStep) {
        this.rootStep = json;
        this.currentStep = this.rootStep;
    }
    FindSuitableSystemResponse(userInput: string): jsonStep[] {
        let foundChild = this.currentStep;
        
        while (this.currentStep?.children[0].data?.Type == "system") this.currentStep = this.currentStep.children[0];
        
        let highestCorrespondingWordCount = 0;

        this.currentStep?.children.forEach(childStep => {
            let currentStepCorrespondingWordsCount = 0;
            
            let words = childStep.data?.Content?.toLowerCase().replace(/\s/g, "").split(",");
            words?.forEach(wordToLookFor => {
                if (userInput.includes(wordToLookFor)) currentStepCorrespondingWordsCount++;
            })
            if (currentStepCorrespondingWordsCount > highestCorrespondingWordCount) foundChild = childStep;
        })

        let currentSystemResponse = foundChild?.children[0];
        let jsonSteps: jsonStep[] = [];

        while(currentSystemResponse?.data?.Type == "system") {
            jsonSteps.push(currentSystemResponse);
            currentSystemResponse = currentSystemResponse.children[0];
        }
        this.currentStep = foundChild;
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