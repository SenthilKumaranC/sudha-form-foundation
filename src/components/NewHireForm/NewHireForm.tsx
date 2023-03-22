//normal css
//import "./NewHireForm.css"

//moduel css
import NewHireFormField from "../NewHireFormField/NewHireFormField";
import classes from "./NewHireForm.module.css";

const NewHireForm = () => {
  return (
    <div className={classes.NewHireForm}>
      <div className={classes.Block_1}>
        <span className={classes.Block_1_title}>Company Code</span>
        <span className={classes.Block_1_value}>467</span>
      </div>
      <div className={classes.Block_2}>
        <NewHireFormField></NewHireFormField>
        <NewHireFormField></NewHireFormField>
      </div>
      <div className={classes.Block_3}>
        <div className={classes.Block_3_1}>Block 3 1
         <input></input>
        </div>
        <div className={classes.Block_3_2}>Block 3 2</div>
      </div>
    </div>
  );
};

export default NewHireForm;
