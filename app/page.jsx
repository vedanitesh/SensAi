import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroSection from "@/components/hero";
import { CardContent,Card } from "@/components/ui/card";
import { features } from "@/data/features";
import { howItWorks } from "@/data/howItWorks";
import { testimonial } from "@/data/testimonial";
import { Accordion,AccordionContent,AccordionTrigger,AccordionItem } from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="grid-background" />
      <HeroSection />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            Powerful Features for Your Career Growth</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature,index)=>{
            return (

              <Card key={index}
              className="border-2 hover:border-primary transition-colors duration-300">
                 <CardContent className="pt-6 text-center flex flex-col items-center">
                  <div className="flex flex-col items-center justify-center">{feature.icon}
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                 </CardContent>
              </Card>
            );


          })}</div>
        </div>
      </section>

      
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">50+</h3>
                <p className="text-muted-foreground">Industries Covered</p>
              </div>
          

        
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">10000+</h3>
                <p className="text-muted-foreground">Interview Questions</p>
              </div>
          

        
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">95%</h3>
                <p className="text-muted-foreground">Success Rate</p>
              </div>
         

        
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl font-bold">24/7</h3>
                <p className="text-muted-foreground">AI Support</p>
              </div>
              </div>
        </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold  mb-4">
          How it Works</h2>
          <p className="text-muted-foreground"> Four Simple steps to accelerate your career growth</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {howItWorks.map((items,index)=>{
            return (
             <div key={index}>
               <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                 {items.icon}
               </div>
               <h3 className="font-semibold text-xl">{items.title}</h3>
               <p className="text-muted-foreground">{items.description}</p>
             </div>
             
            );


          })}</div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
            What our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonial.map((testimonial,index)=>{
            return (

              <Card key={index}
              className="bg-background">
                 <CardContent className="pt-6 ">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="relative h-12 w-12 flex-shrink-0">
                        <Image
                         width={40}
                         height={40}
                         src={testimonial.image}
                         alt={testimonial.author}
                         className="rounded-full object-cover border-2 border-primary/20"
                      />
                      </div>
                      <div>
                        <p className="font-semibold ">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <p className="text-sm text-primary">{testimonial.company}</p>
                      </div>
                    </div>
                    <blockquote>
                    
                      <p className="text-muted-foreground italic relative">
                        <span className="text-3xl text-primary absolute -top-4 -left-2">
                          &quot;
                        </span>
                        {testimonial.quote}
                        <span className="text-3xl text-primary absolute -bottom-4">
                          &quot;
                        </span>
                      </p>
                    </blockquote>
                  </div>
                 </CardContent>
              </Card>
            );


          })}</div>
        </div>
      </section>

       <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold  mb-4">
          Frequently Asked Questions </h2>
          <p className="text-muted-foreground"> Find answers to common questions about our platform</p>
          </div>
          <div className=" max-w-6xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
               {faqs.map((faqs,index)=>{
                return (
              <AccordionItem key={index} value={`item-${index}`}>
               <AccordionTrigger>{faqs.question}</AccordionTrigger>
                <AccordionContent>
                    {faqs.answer}
                </AccordionContent>
              </AccordionItem>

                );
                })}
  
            </Accordion>
           
           


          </div>
        </div>
      </section>

       <section className="w-full ">
        <div className=" mx-auto py-24 gradient rounded-lg">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold  tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
          Ready to Accelerate Your Career? </h2>
          <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl"> Join thousands of professionals who are advancing thier careers
          with AI-powered guidance</p>
          <Link href="/dashboard" passHref>
          <Button
            size ="lg"
            variant ="secondary"
            className="h-11 mt-5 animate-bounce"
            
           >
            Start Your Journey Today<ArrowRight className="ml-2 h-4 w-4"/>
          </Button>
          </Link>
          </div>
          
        </div>
      </section>

    </>
  );
}

