
const Contact = () => {
  
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-center py-4 text-4xl font-bold text-purple-900"> Contact</h1>
        <form action="https://getform.io/f/7cf7adc4-c0be-4fd5-8c98-a7dafca0a095" method="POST" encType="multipart/form-data">
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 font-bold">Name</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="name" />
                </div>
                <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 font-bold">Phone Number</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="phone" />
                </div>
            </div>
            <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2 font-bold">Email</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" name="email" />
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2 font-bold">Subject</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="subject" />
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2 font-bold">Message</label>
                    <textarea className="border-2 rounded-lg p-3 text-purple-900" rows='5' name="message"></textarea>
                </div>
                <button className="bg-purple-900 text-gray-100 mt-4 w-full p-4 rounded-lg">Submit</button>
        </form>
    </div>
  )
}

export default Contact