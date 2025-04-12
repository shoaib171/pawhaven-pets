
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { toast } from '@/hooks/use-toast';

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Create schema for form validation
const formSchema = z.object({
  ownerName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  petName: z.string().min(1, {
    message: "Pet name is required.",
  }),
  petType: z.enum(["dog", "cat", "bird", "other"], {
    required_error: "Please select a pet type.",
  }),
  service: z.enum(["grooming", "veterinary", "daycare", "training"], {
    required_error: "Please select a service.",
  }),
  date: z.date({
    required_error: "Please select a date.",
  }),
  timeSlot: z.string({
    required_error: "Please select a time slot.",
  }),
  specialRequirements: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", 
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
];

const AppointmentForm = () => {
  // Initialize form with default values
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ownerName: "",
      email: "",
      phone: "",
      petName: "",
      specialRequirements: "",
    },
  });

  // Handle form submission
  function onSubmit(data: FormValues) {
    console.log("Form submitted:", data);
    // Here you would typically send the data to your backend
    
    toast({
      title: "Appointment Requested",
      description: `Thank you ${data.ownerName}! We've received your booking request for ${format(data.date, 'MMMM d, yyyy')} at ${data.timeSlot}.`,
    });
    
    // Reset form
    form.reset();
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Owner Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-pawblue">Owner Information</h2>
              
              <FormField
                control={form.control}
                name="ownerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} />
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
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="(123) 456-7890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            {/* Pet Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-pawblue">Pet Information</h2>
              
              <FormField
                control={form.control}
                name="petName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pet Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your pet's name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="petType"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Pet Type</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-wrap gap-6"
                      >
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="dog" />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">Dog</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="cat" />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">Cat</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="bird" />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">Bird</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="other" />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">Other</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          
          {/* Service Information */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-pawblue">Service Information</h2>
            
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="grooming">Pet Grooming</SelectItem>
                      <SelectItem value="veterinary">Veterinary Care</SelectItem>
                      <SelectItem value="daycare">Pet Daycare</SelectItem>
                      <SelectItem value="training">Pet Training</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Appointment Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "MMMM d, yyyy")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date(new Date().setHours(0, 0, 0, 0))
                          }
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="timeSlot"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Time</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a time slot" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="specialRequirements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Special Requirements</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any special needs or instructions for your pet..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Optional - Let us know of any special needs your pet may have.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full md:w-auto px-8 py-6 bg-paworange hover:bg-paworange-dark text-lg"
          >
            Book Appointment
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AppointmentForm;
