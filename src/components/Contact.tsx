import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import SocialIcons from './SocialIconsContainer';

const Contact = () => {
  const [state] = useForm("xdoqrqny");

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Submit the form to Formspree
      const response = await fetch('https://formspree.io/f/xdoqrqny', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Show success toast message if submission is successful
      toast.success('Message sent successfully!', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 5,
      });

      // Reset the form after successful submission
      form.reset();
    } catch (error) {
      // Show error toast message if submission fails
      toast.error('Failed to send message. Please try again later.', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      console.error(error);
    }
  };


    return (
        <>
            <div className='px-7 md:px-10 my-10' id='contact'>
                <div className="flex flex-col md:flex-row">
                    {/* texts and icons */}
                    <div className="md:w-1/2">
                        <h1 className='text-3xl mt-5 text-primary font-semibold'>Connect with me: </h1>
                        <p className='text-white my-2 md:w-2/3 leading-[2]'>
                            {/* social icons */}
                            {/* <div className="flex mx-2 hover:cursor-pointer">
                                <SocialIcons />
                            </div> */}
                        </p>
                    </div>
                    {/* contact form */}
                    <div className="md:w-1/2">
                        <p className='mt-16 text-white text-2xl mb-6'>Feel free to reach me out ... </p>
                        <ToastContainer />

                        <form onSubmit={handleFormSubmit} className='text-white' >
                            <input type="text" name='name' id='name' placeholder='Your Name:' required className='bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded my-3' />
                            <input type="email" name='email' id='email' placeholder='Your email:' required className='bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded my-3' />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors} />
                            <textarea required name="message" id="message" cols={30} rows={5} placeholder='Message: ' className='bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded my-3'></textarea>
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                            <button disabled={state.submitting} className='btn bg-primary py-2 px-12 text-white hover:bg-white hover:text-primary block transition-all duration-500 rounded'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
