import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';
import {toast} from 'react-hot-toast'
import axios from 'axios'
import { useState } from 'react';

const ContactForm = () => {
	const [name,setName]=useState("")
	const [email,setEmail]=useState("")
	const [subject,setSubject]=useState("")
	const [message,setMessage]=useState("")
	const [loading,setLoading]=useState(false)

	

	const backend_url=process.env.REACT_APP_BACKEND_URL

	const handleSubmit=async(e)=>{
		e.preventDefault()
		
		try {
			setLoading(true)
			const response=await axios.post(`${backend_url}/api/message/send`,{email,name,subject,message},{})
			console.log(response);
			if(response.data.success){
				toast.success(response.data.message)
				setLoading(false)
			}else{
				toast.error(response.data.message)
				setLoading(false)
			}
		} catch (error) {
			console.log(error.message);
			toast.error(error.message)
		}finally{
			setLoading(false)
		}
	}
	
	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					onSubmit={handleSubmit}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>
					<FormInput
						inputLabel="Full Name"
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="name"
						placeholderText="Your Name"
						ariaLabelName="Name"
						OnChange={(e)=>(setName(e.target.value))}
						value={name}
					/>
					<FormInput
						inputLabel="Email"
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="email"
						placeholderText="Your email"
						ariaLabelName="Email"
						OnChange={(e)=>(setEmail(e.target.value))}
						value={email}
					/>
					<FormInput
						inputLabel="Subject"
						labelFor="subject"
						inputType="text"
						inputId="subject"
						inputName="subject"
						placeholderText="Subject"
						ariaLabelName="Subject"
						OnChange={(e)=>(setSubject(e.target.value))}
						value={subject}
					/>

					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
							onChange={(e)=>(setMessage(e.target.value))}
							value={message}
						></textarea>
					</div>

					<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
						<Button
							title={loading?"Sending...":"Send Message"}
							type="submit"
							aria-label={loading?"Sending...":"Send Message"}						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
