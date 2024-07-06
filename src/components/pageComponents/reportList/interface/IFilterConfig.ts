interface IFilterConfig {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: Array<{ [key: string]: any }>;
    optionLabelKey?: string;
    optionValueKey?: string;
}

export default IFilterConfig