
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";

const contact = {
  email: "angelusignis777@gmail.com",
  phone: "+57 3228352645",
};

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ mode: "onBlur" });

  const onSubmit = async (data: ContactFormValues) => {
    const subject = encodeURIComponent(`Contacto desde el portafolio: ${data.name}`);
    const body = encodeURIComponent(`Nombre: ${data.name}\nEmail: ${data.email}\n\nMensaje:\n${data.message}`);
    window.open(`mailto:${contact.email}?subject=${subject}&body=${body}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contacto" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div>
            <h2 className="text-4xl font-bold mb-6 font-orbitron">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">¡Hablemos!</span>
            </h2>
            <p className="text-xl mb-8 max-w-2xl leading-relaxed text-muted-foreground">
              ¿Tienes un proyecto en mente? Completa el formulario y te responderé lo antes posible.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 rounded-3xl border border-border bg-card p-5">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">{contact.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-3xl border border-border bg-card p-5">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Teléfono</p>
                  <p className="text-sm text-muted-foreground">{contact.phone}</p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-3xl border border-primary/20 bg-card p-8 shadow-2xl"
          >
            <div className="grid gap-6">
              <div>
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  placeholder="Tu nombre"
                  {...register("name", { required: "El nombre es obligatorio" })}
                />
                {errors.name && <p className="mt-2 text-sm text-destructive">{errors.name.message}</p>}
              </div>

              <div>
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tucorreo@ejemplo.com"
                  {...register("email", {
                    required: "El correo es obligatorio",
                    pattern: {
                      value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                      message: "Ingresa un correo válido",
                    },
                  })}
                />
                {errors.email && <p className="mt-2 text-sm text-destructive">{errors.email.message}</p>}
              </div>

              <div>
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  placeholder="Cuéntame sobre tu proyecto..."
                  {...register("message", { required: "El mensaje es obligatorio" })}
                />
                {errors.message && <p className="mt-2 text-sm text-destructive">{errors.message.message}</p>}
              </div>

              <Button type="submit" size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </Button>

              {submitted && (
                <p className="rounded-3xl border border-primary/20 bg-primary/10 p-4 text-center text-sm text-primary" aria-live="polite">
                  ¡Gracias! El formulario fue enviado y estaré en contacto pronto.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
