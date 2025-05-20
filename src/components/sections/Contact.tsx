
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export const Contact = () => {
  const whatsappNumber = "+5511937399990"; // Updated WhatsApp number
  const emailAddress = "marcobennes0@gmail.com"; // Updated email address

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`, "_blank");
  };

  const handleEmailClick = () => {
    window.open(`mailto:${emailAddress}`, "_blank");
  };

  return (
    <section id="contact" className="flex flex-col items-center">
      <h2 className="text-white text-5xl font-bold text-center mt-[100px] max-md:text-[40px] max-md:mt-10">
        Entre em contato
      </h2>
      
      <div className="flex flex-wrap justify-center gap-8 mt-12">
        <Button 
          onClick={handleWhatsAppClick}
          className="flex items-center gap-2 py-6 px-8 bg-[#25D366] hover:bg-[#128C7E] text-white text-lg"
        >
          <Phone className="h-6 w-6" />
          <span>WhatsApp</span>
        </Button>
        
        <Button 
          onClick={handleEmailClick}
          className="flex items-center gap-2 py-6 px-8 bg-[#EA4335] hover:bg-[#D93025] text-white text-lg"
        >
          <Mail className="h-6 w-6" />
          <span>Email</span>
        </Button>
      </div>
    </section>
  );
};
