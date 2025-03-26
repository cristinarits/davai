import { ButtonP } from "@/components/ui/buttonpurple";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Phone, Mail, Instagram, Linkedin } from "lucide-react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(6, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactSection = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-fuchsia-700">Contact</h2>
              <p className="text-xl text-black font-medium mb-2">Have a question?</p>
              <p className="text-black">
                Help us build better community and break the language barrier.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg text-black font-semibold">Social Media</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-black hover:text-fuchsia-700 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-black hover:text-fuchsia-700 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-fuchsia-700" />
                <span className="text-black">+372 5583759</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-fuchsia-700" />
                <span className="text-black">DAVAI@DAVAI.DAVAI</span>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-gradient-to-br from-fuchsia-100 via-pink-50 to-white rounded-xl p-8 shadow-md border border-fuchsia-100">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-fuchsia-800 font-semibold">First Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="First name"
                            className="text-black bg-white border border-fuchsia-300 focus:border-fuchsia-500 focus:ring-fuchsia-500 rounded-lg"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-fuchsia-800 font-semibold">Last Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Last name"
                            className="text-black bg-white border border-fuchsia-300 focus:border-fuchsia-500 focus:ring-fuchsia-500 rounded-lg"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-fuchsia-800 font-semibold">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Email address"
                          className="text-black bg-white border border-fuchsia-300 focus:border-fuchsia-500 focus:ring-fuchsia-500 rounded-lg"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-fuchsia-800 font-semibold">Phone</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Phone number"
                          className="text-black bg-white border border-fuchsia-300 focus:border-fuchsia-500 focus:ring-fuchsia-500 rounded-lg"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-fuchsia-800 font-semibold">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message..."
                          className="text-black min-h-[120px] bg-white border border-fuchsia-300 focus:border-fuchsia-500 focus:ring-fuchsia-500 rounded-lg"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <ButtonP
                  type="submit"
                  className="w-full bg-fuchsia-900 text-white hover:bg-fuchsia-950 font-semibold tracking-wide"
                >
                  Send Message
                </ButtonP>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;