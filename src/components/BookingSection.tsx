import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  CalendarDays,
  User,
  Phone,
  ChevronRight,
  ChevronLeft,
  Check,
} from "lucide-react";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  phone: z
    .string()
    .trim()
    .min(9, "Valid phone required")
    .max(15)
    .regex(/^[0-9+\s-]+$/, "Invalid phone"),
  email: z.string().trim().email("Invalid email").max(255).or(z.literal("")),
  suite: z.string().max(50),
  checkIn: z.string().min(1, "Check-in date required"),
  checkOut: z.string().min(1, "Check-out date required"),
  guests: z.string(),
  notes: z.string().max(500).optional(),
});

const BookingSection = () => {
  const ref = useScrollReveal();
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    suite: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    notes: "",
  });

  const update = (key: string, value: string) => {
    setForm((p) => ({ ...p, [key]: value }));
    setErrors((e) => {
      const n = { ...e };
      delete n[key];
      return n;
    });
  };

  const validateStep = () => {
    if (step === 0) {
      const e: Record<string, string> = {};
      if (!form.checkIn) e.checkIn = "Required";
      if (!form.checkOut) e.checkOut = "Required";
      if (form.checkIn && form.checkOut && form.checkIn >= form.checkOut)
        e.checkOut = "Must be after check-in";
      const today = new Date().toISOString().split("T")[0];
      if (form.checkIn && form.checkIn < today)
        e.checkIn = "Cannot be in the past";
      setErrors(e);
      return Object.keys(e).length === 0;
    }
    if (step === 1) {
      const result = bookingSchema.safeParse(form);
      if (!result.success) {
        const e: Record<string, string> = {};
        result.error.errors.forEach((err) => {
          if (err.path[0]) e[String(err.path[0])] = err.message;
        });
        setErrors(e);
        return false;
      }
      return true;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) setStep((s) => Math.min(2, s + 1));
  };

  const steps = ["Suite & Dates", "Guest Details", "Confirm"];

  const inputClass =
    "w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all";

  const suiteNames: Record<string, string> = {
    kifaru: "Kifaru Suite",
    tembo: "Tembo Suite",
    nyati: "Nyati Suite",
    twiga: "Twiga Suite",
  };

  return (
    <section id="booking" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            <span className="gold-text">Book Your Stay</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Reserve your suite in just a few steps.
          </p>
        </div>

        {/* Stepper */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                  i <= step
                    ? "gold-gradient text-primary-foreground"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {i < step ? <Check size={16} /> : i + 1}
              </div>
              <span className="hidden sm:block text-sm text-muted-foreground">
                {s}
              </span>
              {i < steps.length - 1 && (
                <div
                  className={`w-8 sm:w-16 h-0.5 ${
                    i < step ? "bg-primary" : "bg-border"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="glass rounded-2xl p-6 sm:p-8">
          {step === 0 && (
            <div className="space-y-5">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Select Suite
                </label>
                <select
                  value={form.suite}
                  onChange={(e) => update("suite", e.target.value)}
                  className={inputClass}
                >
                  <option value="">Any Available Suite</option>
                  <option value="kifaru">Kifaru Suite — KSh 3,000/24hrs</option>
                  <option value="tembo">Tembo Suite — KSh 3,500/24hrs</option>
                  <option value="nyati">Nyati Suite — KSh 3,000/24hrs</option>
                  <option value="twiga">Twiga Suite — KSh 3,000/24hrs</option>
                </select>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Check-in
                  </label>
                  <input
                    type="date"
                    value={form.checkIn}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => update("checkIn", e.target.value)}
                    className={`${inputClass} ${
                      errors.checkIn ? "ring-2 ring-destructive" : ""
                    }`}
                  />
                  {errors.checkIn && (
                    <p className="text-destructive text-xs mt-1">
                      {errors.checkIn}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Check-out
                  </label>
                  <input
                    type="date"
                    value={form.checkOut}
                    min={form.checkIn || new Date().toISOString().split("T")[0]}
                    onChange={(e) => update("checkOut", e.target.value)}
                    className={`${inputClass} ${
                      errors.checkOut ? "ring-2 ring-destructive" : ""
                    }`}
                  />
                  {errors.checkOut && (
                    <p className="text-destructive text-xs mt-1">
                      {errors.checkOut}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Number of Guests
                </label>
                <select
                  value={form.guests}
                  onChange={(e) => update("guests", e.target.value)}
                  className={inputClass}
                >
                  {[1, 2, 3, 4].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-5">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  maxLength={100}
                  className={`${inputClass} ${
                    errors.name ? "ring-2 ring-destructive" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-destructive text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 0712345678"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  maxLength={15}
                  className={`${inputClass} ${
                    errors.phone ? "ring-2 ring-destructive" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="text-destructive text-xs mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Email (optional)
                </label>
                <input
                  type="email"
                  placeholder="e.g. john@email.com"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  maxLength={255}
                  className={`${inputClass} ${
                    errors.email ? "ring-2 ring-destructive" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-destructive text-xs mt-1">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Special Requests
                </label>
                <textarea
                  placeholder="Any special requests?"
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  maxLength={500}
                  className={inputClass + " h-24 resize-none"}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  {form.notes.length}/500
                </p>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-semibold mb-4">
                Booking Summary
              </h3>
              <div className="space-y-3 text-sm">
                {[
                  [
                    "Suite",
                    form.suite
                      ? suiteNames[form.suite] || form.suite
                      : "Any Available Suite",
                  ],
                  ["Check-in", form.checkIn || "—"],
                  ["Check-out", form.checkOut || "—"],
                  ["Guests", form.guests],
                  ["Name", form.name || "—"],
                  ["Phone", form.phone || "—"],
                ].map(([label, val]) => (
                  <div
                    key={label}
                    className="flex justify-between border-b border-border pb-2"
                  >
                    <span className="text-muted-foreground">{label}</span>
                    <span className="font-medium">{val}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                By confirming, you'll be redirected to WhatsApp to finalize your
                booking with our manager.
              </p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-colors ${
                step === 0
                  ? "invisible"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              <ChevronLeft size={16} /> Back
            </button>
            {step < 2 ? (
              <button
                onClick={nextStep}
                className="flex items-center gap-2 gold-gradient text-primary-foreground font-semibold px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Next <ChevronRight size={16} />
              </button>
            ) : (
              <a
                href={`https://wa.me/254705203156?text=${encodeURIComponent(
                  `Hi! I'd like to book ${
                    form.suite
                      ? `the ${suiteNames[form.suite] || form.suite}`
                      : "any available suite"
                  }.\n\nCheck-in: ${form.checkIn}\nCheck-out: ${
                    form.checkOut
                  }\nGuests: ${form.guests}\nName: ${form.name}\nPhone: ${
                    form.phone
                  }${form.notes ? "\n\nNotes: " + form.notes : ""}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 gold-gradient text-primary-foreground font-semibold px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Confirm via WhatsApp <ChevronRight size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-10 glass rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[21/9]">
          <iframe
            title="Maya Stays Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500!2d34.1183954!3d0.45797679999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f17!3m3!1m2!1s0x177f61ade79a6d41%3A0xb269da638e4d88ad!2sDrimz%20Hotel!5e0!3m2!1sen!2ske!4v1"
            className="w-full h-full border-0 opacity-80"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
