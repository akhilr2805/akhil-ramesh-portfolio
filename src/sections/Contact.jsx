import emailjs from "@emailjs/browser";
import RevealOnScroll from "../Ui/RevealOnScroll";
import { toast } from 'react-toastify';

export const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      toast.success("Message sent successfully!");
      e.target.reset();
    })
    .catch((error) => {
      console.error(error);
      toast.error("Failed to send message");
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen font-mono flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center">
            Get In touch
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              name="name"
              placeholder="Name..."
              required
              className="w-full bg-white/10 px-4 py-3 text-white rounded"
            />

            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              required
              className="w-full bg-white/10 px-4 py-3 text-white rounded"
            />

            <textarea
              name="message"
              rows={6}
              placeholder="Type your message..."
              required
              className="w-full bg-white/10 px-4 py-3 text-white rounded"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 py-3 cursor-pointer "
            >
              Submit
            </button>

          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
