"use client";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

interface CourseEnrollButtonProps {
  price: number;
  courseId: string;
}

export const CourseEnrollButton = ({
  price,
  courseId,
}: CourseEnrollButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);
      await axios.post(`/api/courses/${courseId}/checkout`);
      setIsEnrolled(true);
      toast.success("You have successfully enrolled in the course!");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      disabled={isLoading || isEnrolled}
      onClick={onClick}
      className="w-full md:w-auto"
      size="sm"
    >
      {isEnrolled ? "Enrolled" : `Enroll for ${formatPrice(price)}`}
    </Button>
  );
};
