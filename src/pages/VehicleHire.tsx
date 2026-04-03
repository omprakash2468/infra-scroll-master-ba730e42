import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import ContactSection from "@/components/ContactSection";
import { Truck, Calendar, Phone, User, Construction, Settings, Hammer, ChevronLeft, ChevronRight, ArrowDown, ArrowUp, Clock, UserCheck, Wrench, CheckCircle } from "lucide-react";

const vehicles = [
  { id: 5, name: "Tipper Truck Fleet", desc: "For large-scale material transport", image: "/truck-fleet.jpg" },
  { id: 6, name: "JCB Roller Compactor", desc: "Soil and asphalt compaction", image: "/roller.jpg" },
  { id: 7, name: "Tata Hitachi ZAXIS 220LC", desc: "High-performance excavator for heavy duty", image: "/vehicle-7.jpg" },
  { id: 8, name: "Agricultural Tractor", desc: "Soil preparation and land leveling", image: "/vehicle-8.jpg" },
  { id: 9, name: "Water Tanker Truck", desc: "Dust suppression and site water supply", image: "/vehicle-9.jpg" },
  { id: 10, name: "JCB Backhoe Loader", desc: "Versatile excavation and material loading", image: "/backhoe-loader.jpg" },
  { id: 11, name: "Ajax Argo 4300 Mixer", desc: "Self-loading concrete mixing and transport", image: "/vehicle-11.jpg" },
  { id: 12, name: "CAT Motor Grader 24", desc: "Precision land leveling and road finishing", image: "/vehicle-12.png" },
  { id: 13, name: "Escorts F15 Crane", desc: "Pick and carry crane for heavy lifting", image: "/crane.png" },
  { id: 15, name: "John Deere 5405 Loader", desc: "Heavy-duty tractor with front loader attachment", image: "/john-deere-5405.jpg" },
  { id: 16, name: "SBC Heavy-Duty Flatbed Trailer", desc: "Specialized for transporting oversized construction equipment", image: "/trailer-truck.jpg" },
];

const VehicleHire = () => {
  const [selectedVehicles, setSelectedVehicles] = useState<number[]>([]);
  const bookingRef = useRef<HTMLDivElement>(null);

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleVehicle = (id: number) => {
    setSelectedVehicles(prev => 
      prev.includes(id) 
        ? prev.filter(vId => vId !== id)
        : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedVehicles.length === 0) {
      toast.error("Please select at least one vehicle to hire.");
      return;
    }
    
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const date = formData.get("date");
    const details = formData.get("details") || "None";
    
    const selectedNames = vehicles
      .filter(v => selectedVehicles.includes(v.id))
      .map(v => v.name)
      .join(", ");
    
    const message = `*NEW VEHICLE HIRE REQUEST*%0A%0A*Vehicles*: ${selectedNames}%0A*Name*: ${name}%0A*Phone*: ${phone}%0A*Date*: ${date}%0A*Details*: ${details}`;
    
    window.open(`https://wa.me/917742825259?text=${message}`, "_blank");
    toast.success("Redirecting to WhatsApp...");
  };

  return (
    <section id="vehicle-hire" className="pb-24 min-h-screen bg-background blueprint-grid">
      {/* Hero Banner with the user's photo */}
      <div className="w-full h-[80vh] relative bg-black z-10 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/hiring-hero.jpg" 
            alt="Our Construction Fleet" 
            className="w-full h-full object-cover opacity-60" 
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/90" />
        </div>
        
        {/* Right Middle - "OUR VEHICLES" (Home style) */}
        <div className="absolute right-6 md:right-20 top-1/2 -translate-y-1/2 z-40 text-right max-w-3xl px-4 pointer-events-none">
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white drop-shadow-[0_5px_25px_rgba(0,0,0,0.6)] leading-[0.9] uppercase">
              Our Muscle, <br className="hidden sm:block" /> Your Success
            </h1>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-primary drop-shadow-[0_5px_25px_rgba(0,0,0,0.6)] leading-[0.9] mt-6 uppercase">
              We provide the <br className="hidden sm:block" /> heavy machinery
            </h1>
          </motion.div>
        </div>
      </div>
      
      {/* Professional Motto Section (Refined Reference Style) */}
      <div 
        className="bg-white py-24 md:py-32 relative z-20 overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(14, 165, 233, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(14, 165, 233, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      >
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-12"
            >
              <div className="space-y-6">
                <h2 className="font-heading text-4xl md:text-6xl tracking-wider text-slate-900 uppercase font-semibold leading-none">
                  POWERING <br/> INFRASTRUCTURE
                </h2>
                <div className="flex h-2.5 w-full max-w-sm">
                  <div className="h-full w-1/4 bg-primary" />
                  <div className="h-full w-3/4 bg-slate-900" />
                </div>
              </div>
              
              <p className="font-body text-xl md:text-2xl text-slate-600 leading-relaxed max-w-4xl">
                At Shree Balaji Construction, we provide a robust fleet of heavy-duty machinery and transport vehicles designed to handle the toughest terrains.
                High-performance equipment is the backbone of every successful build—move mountains and build the future with the reliability you need.
              </p>

              {/* Reference Style Footer Line integrated inside for better space coverage - Line removed as requested */}
              <div className="mt-12 pt-4">
                <p className="text-slate-800 font-body text-sm md:text-base flex flex-wrap items-center gap-3">
                  <span className="uppercase tracking-widest font-bold text-xs text-slate-500">For business enquiries, please contact:</span>
                  <a 
                    href="mailto:jakharvicky96@gmail.com"
                    className="bg-primary px-3 py-1 font-bold text-white rounded-sm text-xs md:text-sm hover:scale-105 hover:shadow-lg transition-all"
                  >
                    jakharvicky96@gmail.com
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Reference Framed Image (Toyota Hilux Feature) */}
            <motion.div 
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Decorative Frame Behind Image (Reference Style) */}
              <div className="absolute -inset-4 md:-inset-8 border border-slate-300 translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8 z-0" />
              
              {/* Offset Primary Border (Reference Style) */}

              <div className="absolute bottom-0 left-0 w-1/3 h-1/3 border-b-2 border-l-2 border-slate-900 -ml-3 -mb-3 z-20 pointer-events-none opacity-20" />

              {/* Main Image Container */}
              <div className="relative z-10 bg-white p-2 border border-slate-200 shadow-2xl">
                <div className="aspect-[16/10] overflow-hidden grayscale-[10%] hover:grayscale-0 transition-opacity duration-700">
                  <img 
                    src="/toyota-hilux.jpg" 
                    alt="Toyota Hilux Feature" 
                    className="w-full h-full object-cover" 
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mx-auto px-4 md:px-8 relative z-20 pt-6 md:pt-10 pb-24 md:pb-32">
        <div className={`grid gap-12 max-w-[95%] mx-auto transition-all ${selectedVehicles.length > 0 ? 'lg:grid-cols-3' : 'lg:grid-cols-1'}`}>
          {/* Left Column - Vehicle Selection (Grid) */}
          <div className={`space-y-12 ${selectedVehicles.length > 0 ? 'lg:col-span-2' : ''}`}>
            <div className="space-y-4">
              <h2 className="font-heading text-4xl md:text-6xl tracking-wider border-l-8 border-primary pl-8 uppercase">SELECT YOUR MACHINE</h2>
              <p className="font-body text-slate-500 text-lg md:text-xl pl-10 italic uppercase tracking-widest flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                Browse our fleet below to find the perfect match for your site requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
              {vehicles.map((vehicle, index) => {
                const isSelected = selectedVehicles.includes(vehicle.id);
                // Zigzag effect: alternate vertical offset
                const isEven = index % 2 === 1;
                
                return (
                  <motion.div
                    key={vehicle.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index % 2) * 0.1 }}
                    onClick={() => toggleVehicle(vehicle.id)}
                    className={`cursor-pointer border-0 rounded-sm overflow-hidden transition-all duration-500 relative group bg-card shadow-2xl ${
                      isSelected
                        ? "ring-2 ring-primary"
                        : "hover:ring-1 hover:ring-primary/30"
                    } ${selectedVehicles.length === 0 && isEven ? "md:translate-y-12" : ""}`}
                  >
                    <div className="aspect-[16/10] w-full overflow-hidden relative">
                      <img 
                        src={vehicle.image} 
                        alt={vehicle.name} 
                        loading="lazy"
                        decoding="async"
                        className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 ${isSelected ? "scale-105" : ""}`} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Overlaid Title (Reference Style) */}
                      <div className="absolute bottom-6 left-6 right-6">
                         <h3 className="font-heading text-4xl md:text-6xl text-white tracking-wider uppercase drop-shadow-2xl group-hover:text-primary transition-colors leading-[0.9]">
                           {vehicle.name}
                         </h3>
                         <div className="w-24 h-2 bg-primary mt-4 group-hover:w-full transition-all duration-500" />
                      </div>
                    </div>
                    
                    <div className="p-10 bg-white">
                      <p className="text-xl md:text-3xl text-slate-900 font-body leading-tight uppercase tracking-wider font-bold">
                        {vehicle.desc}
                      </p>
                    </div>

                    {isSelected && (
                      <div className="absolute inset-x-0 top-0 h-1 bg-primary" />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <AnimatePresence mode="popLayout">
            {selectedVehicles.length > 0 && (
              <motion.div
                ref={bookingRef}
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.95 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="bg-card p-10 border border-border rounded-sm relative overflow-hidden group h-fit shadow-2xl shadow-black/40 sticky top-24"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500 -mr-16 -mt-16" />
                
                <h2 className="font-heading text-4xl md:text-6xl tracking-wider mb-12 border-b-4 border-primary pb-6 relative z-10 uppercase italic font-black">BOOKING DETAILS</h2>
                
                <div className="mb-8 p-4 bg-primary/5 border border-primary/20 rounded-sm relative z-10">
                   <p className="text-xs uppercase tracking-widest text-primary font-bold mb-2">Selected Fleet:</p>
                   <div className="flex flex-wrap gap-2">
                     {vehicles.filter(v => selectedVehicles.includes(v.id)).map(v => (
                       <span key={v.id} className="text-sm font-heading bg-primary/10 px-3 py-1 rounded-sm border border-primary/20">
                         {v.name}
                       </span>
                     ))}
                   </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 bg-background p-2 border border-border rounded-sm focus-within:border-primary transition-all">
                      <User className="ml-3 w-6 h-6 text-muted-foreground shrink-0" />
                      <Input required name="name" placeholder="Full Name" className="text-lg h-12 border-0 bg-transparent focus-visible:ring-0 placeholder:text-muted-foreground" />
                    </div>
                    
                    <div className="flex items-center gap-4 bg-background p-2 border border-border rounded-sm focus-within:border-primary transition-all">
                      <Phone className="ml-3 w-6 h-6 text-muted-foreground shrink-0" />
                      <Input required name="phone" type="tel" placeholder="Phone Number" className="text-lg h-12 border-0 bg-transparent focus-visible:ring-0 placeholder:text-muted-foreground" />
                    </div>
                    
                    <div className="flex items-center gap-4 bg-background p-2 border border-border rounded-sm focus-within:border-primary transition-all">
                      <Calendar className="ml-3 w-6 h-6 text-muted-foreground shrink-0" />
                      <Input required name="date" type="date" className="text-lg h-12 border-0 bg-transparent focus-visible:ring-0 text-muted-foreground w-full" />
                    </div>

                    <div className="bg-background border border-border rounded-sm p-6 focus-within:border-primary transition-all text-lg font-body">
                      <Textarea name="details" placeholder="Additional Details (Location, Duration...)" className="min-h-[150px] text-lg border-0 bg-transparent focus-visible:ring-0 resize-none p-0" />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-16 text-2xl font-heading tracking-widest group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm"
                  >
                    <span className="relative z-10 uppercase">PROCEED TO WHATSAPP</span>
                    <div className="absolute inset-0 h-full w-0 bg-white/20 transition-[width] group-hover:w-full ease-out duration-300" />
                  </Button>
                  
                  <Button 
                    type="button" 
                    variant="ghost" 
                    onClick={() => setSelectedVehicles([])}
                    className="w-full text-lg text-muted-foreground hover:text-foreground"
                  >
                    Clear All Selections
                  </Button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <ContactSection />
      
      {/* Floating Booking Button */}
      <AnimatePresence>
        {selectedVehicles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-10 right-6 md:right-10 z-[60]"
          >
            <Button
              onClick={scrollToBooking}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-8 md:py-10 rounded-full shadow-2xl flex flex-col items-center gap-2 group transition-all duration-300 hover:scale-105"
            >
              <span className="font-heading text-lg md:text-xl tracking-tight uppercase font-bold">
                BOOKING SECTION
              </span>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowUp className="w-6 h-6 md:w-8 md:h-8" />
              </motion.div>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VehicleHire;
