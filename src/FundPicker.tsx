import { BasePicker, IBasePickerProps, IPickerItemProps } from '@fluentui/react/lib/Pickers';
import { initializeComponentRef } from '@fluentui/utilities';

/**
 * Fund (ID + name)
 */
export interface IFund {
    /** Fund id */
    id: string;
  
    /** Fund name */
    name: string;
  }

/**
 * Fund picker component props
 * {@docCategory FundPicker}
 */
export interface IFundPickerProps extends IBasePickerProps<IFund> {}

export interface IFundItemProps extends IPickerItemProps<IFund> {}

export interface IFundItemSuggestionProps extends React.AllHTMLAttributes<HTMLElement> {
    /** Additional CSS class(es) to apply to the TagItemSuggestion div element */
    className?: string;
}

/**
 * Render a selected fund
 * @param props 
 * @returns 
 */
export const FundItem = (props: IFundItemProps) => {
    return <div>{props.item.name} ({props.item.id})</div>
}

/**
 * Render a fund suggestion
 * @param props 
 * @returns 
 */
export const FundItemSuggestion = (props: IFundItemSuggestionProps) => {
    const { children } = props;
  
    return <div> {children} </div>;
};

/**
 * {@docCategory FundPicker}
 */
 export class FundPicker extends BasePicker<IFund, IFundPickerProps> {
    public static defaultProps = {
        onRenderItem: (props: IFundItemProps) => <FundItem {...props}>{props.name} ({props.id})</FundItem>,
        onRenderSuggestionsItem: (props: IFund) => {
            return <FundItemSuggestion>{props.name} ({props.id})</FundItemSuggestion>
        },
      };
    
      constructor(props: IFundPickerProps) {
        super(props);
        initializeComponentRef(this);
      }
 }