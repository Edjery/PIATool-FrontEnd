interface IStepControls {
    activeStep: number;
    onNext: () => void;
    onBack: () => void;
    stepsComponentsLength: number;
}
export default IStepControls