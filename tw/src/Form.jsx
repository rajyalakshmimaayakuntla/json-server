import {Formik, useFormik} from 'formik';
function Form(){
  const data=useFormik({
    initialValues:{
      name:'',
      phone:'',
      email:''
    },
    onSubmit:(v)=>{
       console.log(v)
    }
  })
  //  console.log(data.errors)
return (<form onSubmit={data.handleSubmit}>
  <input type='text'placeholder='Enter your name' name="name" value={data.values.name} onChange={data.handleChange}></input><br/>
  <input type='number' placeholder='Enter phone number'name='phone' value={data.values.phone} onChange={data.handleChange}></input><br/>
  <input type='email' placeholder='Enter Email Address'name='email' value={data.values.email} onChange={data.handleChange}></input><br/>
  <button type='submit'>Submit</button><br/>
</form>)
}
export default Form