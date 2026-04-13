import { useState } from "react";
import { toast } from "sonner";

interface EnquiryFormProps {
  productName?: string;
  compact?: boolean;
}

const EnquiryForm = ({ productName, compact }: EnquiryFormProps) => {
  const inputClass = "w-full px-4 py-3 rounded-md border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-highlight/30 focus:border-highlight transition-colors";

  return (
    <form action="https://formsubmit.co/karan.pittie@yahoo.com" method="POST" className="space-y-4">
      <input type="hidden" name="_cc" value="anushka.sawhney.as@gmail.com">
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={window.location.href} />
      <div className={compact ? "space-y-4" : "grid grid-cols-1 md:grid-cols-2 gap-4"}>
        <input type="text" name="name" placeholder="Name *" className={inputClass} required />
        <input type="tel" name="phone" placeholder="Phone *" className={inputClass} required />
        <input type="email" name="email" placeholder="Email *" className={inputClass} required />
        <input type="text" name="company" placeholder="Company" className={inputClass} />
        {!compact && (
          <>
            <input type="text" name="product" placeholder="Product Requirement" defaultValue={productName || ""} className={inputClass} />
            <input type="text" name="quantity" placeholder="Quantity" className={inputClass} />
          </>
        )}
      </div>
      <textarea name="message" placeholder="Message" className={`${inputClass} min-h-[100px] resize-y`} />
      <button type="submit" className="w-full md:w-auto px-8 py-3 rounded-md gradient-navy text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
        Submit Enquiry
      </button>
    </form>
  );
};

export default EnquiryForm;
