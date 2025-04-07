import {Send} from "lucide-react";
import {z} from "zod";
import {useState} from "react";
import {ClipLoader} from "react-spinners";
import emailjs from 'emailjs-com';
import {toast} from "sonner";
import SuccesForm from "@/components/succesForm";

const formschema = z.object({
    name: z.string(),
    email: z.string().email(),
    message: z.string(),
})

export default function Form() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSucces, setIsSucces] = useState(false);

    const sendEmail = (formData : FormData) => {
        const dataForm = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            message: formData.get("message") as string,
        }
        try {
        const res = formschema.parse(dataForm)
            if(res){
                setIsLoading(true);


                emailjs
                    .send(
                        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                        dataForm,
                        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
                    )
                    .then(
                        (response) => {
                            setIsLoading(false);
                            setIsSucces(true)
                            console.log(response);
                            toast.success("Messages biens envoyé !")
                        },
                        (err) => {
                            setIsLoading(false);
                            toast.error("Une erreur est survenue ! lors de l'envoie du messages réessayé ou envoyé moi directement un mail !")
                            console.log(err);
                        }
                    );

            }
        }catch (err){
            console.log(err)
            toast.error("Une erreur est survenue lors de l'envoi du message. Veuillez réessayer en respectant les formats et les champs requis, ou contactez-moi directement par e-mail.")
        }
    }

    return (
        <div className={"flex flex-col gap-8"}>
            <h2 className={"text-xl text-white font-bold"}>Envoyer moi un Message</h2>
            {!isLoading ? (
                !isSucces ? (
                    <form className={"flex flex-col gap-4"} action={sendEmail}>
                        <label>
                            <input
                                required={true}
                                type={"text"}
                                autoComplete={"name"}
                                name={"name"}
                                placeholder={"Votre nom *"}
                                className={"bg-[#030711] z-50 opacity-100 rounded-md p-2 w-full focus:border-4 focus:border-[#0ea5e9]"}
                            />
                        </label>
                        <label>
                            <input
                                required={true}
                                type={"email"}
                                name={"email"}
                                autoComplete={"email"}
                                placeholder={"Votre email *"}
                                className={"bg-[#030711] z-50 opacity-100 rounded-md p-2 w-full focus:border-4 focus:border-[#0ea5e9]"}
                            />
                        </label>
                        <label>
            <textarea
                required={true}
                placeholder={"Votre Message *"}
                name={"message"}
                className={"bg-[#030711] resize-none z-50 opacity-100 rounded-md p-2 w-full focus:border-4 focus:border-[#0ea5e9]"}
            />
                        </label>

                        <button type="submit" className={"bg-[#0ea5e9] cursor-pointer rounded-md flex items-center justify-center p-2 gap-4 hover:bg-blue-500"}>
                            <Send className={"h-4 w-4"} />Envoyez le Message
                        </button>
                    </form>
                ) : (
                    <SuccesForm />
                )
            ) : (
                <div className={"flex items-center justify-center"}>
                    <ClipLoader color="#58c0fa" />
                </div>
            )}
        </div>
    );

}