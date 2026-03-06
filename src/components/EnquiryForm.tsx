import { useState } from "react";
import { toast } from "sonner";

interface EnquiryFormProps {
  productName?: string;
  compact?: boolean;
}

const EnquiryForm = ({ productName, compact }: EnquiryFormProps) => {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", company: "", product: productName || "", quantity: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Thank you for your enquiry! We will get back to you shortly.");
    setForm({ name: "", phone: "", email: "", company: "", product: productName || "", quantity: "", message: "" });
  };

  const inputClass = "w-full px-4 py-3 rounded-md border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-highlight/30 focus:border-highlight transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={compact ? "space-y-4" : "grid grid-cols-1 md:grid-cols-2 gap-4"}>
        <input type="text" placeholder="Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} required />
        <input type="tel" placeholder="Phone *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} required />
        <input type="email" placeholder="Email *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} required />
        <input type="text" placeholder="Company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputClass} />
        {!compact && (
          <>
            <input type="text" placeholder="Product Requirement" value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })} className={inputClass} />
            <input type="text" placeholder="Quantity" value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} className={inputClass} />
          </>
        )}
      </div>
      <textarea placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} min-h-[100px] resize-y`} />
      <button type="submit" className="w-full md:w-auto px-8 py-3 rounded-md gradient-navy text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
        Submit Enquiry
      </button>
    </form>
  );
};

export default EnquiryForm;
