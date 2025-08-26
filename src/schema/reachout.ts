import { z } from "zod";

export const formSchema = z.object({
  country: z.string().min(1, "Country / Region is required"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Invalid email address"),
  jobTitle: z.string().min(2, "Job title is required"),
  contact: z
    .string()
    .regex(/^[0-9]+$/, "Contact must be a number")
    .min(8, "Contact must be at least 8 digits"),
  companyName: z.string().min(2, "Company name is required"),
  companySize: z.string().min(1, "Company size is required"),
  website: z.url("Invalid website URL"),
});

export type FormSchemaType = z.infer<typeof formSchema>;
