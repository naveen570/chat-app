"use client";
import React from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { AddFriend } from "@/types/add";
import { zodResolver } from "@hookform/resolvers/zod";
import { addFriendSchema } from "@/schemas";
import Button from "../ui/button";
import { addFriend } from "@/actions/add";
import { useToast } from "@/components/ui/use-toast";
const AddFriendForm = () => {
  const { toast } = useToast();
  const form = useForm<AddFriend>({
    resolver: zodResolver(addFriendSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleAddFriendForm = async (data: AddFriend) => {
    try {
      const isAdded = await addFriend(data.email);
      if (isAdded) {
        toast({
          title: "Success",
          description: "Friend added successfully",
        });
        form.reset();
      }
    } catch (error) {
      if (error instanceof Error) {
        form.setError("email", { message: error.message });
      }
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleAddFriendForm)}
        className="mx-auto bg-black/50 backdrop-blur-md py-10 px-4 w-full max-w-md rounded-lg shadow-xl flex flex-col gap-5 item items-center animate-fade-in"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full md:w-4/5 mx-auto">
              <FormLabel>Add Friend by Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="a@gmail.com"
                  {...field}
                  className="text-slate-900"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>Add Friend</Button>
      </form>
    </Form>
  );
};

export default AddFriendForm;
