import classes from "./NewHireFormField.module.css"
const NewHireFormField = (props:any) => {
   return <div className={classes.NewHireFormField}>
      <span className={classes.NewHireFormFieldLabel}>{props.label}</span>
      <input></input>
   </div>
}

export default NewHireFormField;