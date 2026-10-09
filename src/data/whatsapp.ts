export const WHATSAPP = {

    number: "19255585243",
    
    defaultMessage: "YES, I wanna talk produce!",
    
    // A helper function to generate the URL dynamically
    getUrl: (customMessage?: string) => {
      const message = customMessage || "YES, I wanna talk produce!";
      return `https://wa.me/19255585243?text=${encodeURIComponent(message)}`;
    }
  }  as const;