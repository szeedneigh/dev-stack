"use client";
import { Share2, Link, Check, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const ShareButton = ({ url, title }: { url: string; title: string }) => {
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Failed to copy",
        description: "Please copy the URL manually",
      });
    }
  };

  const shareOnSocial = (platform: string) => {
    const shareUrl = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
    }[platform];

    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="ghost" size="icon">
            <Share2 className="w-5 h-5" />
          </Button>
        </motion.div>
      </PopoverTrigger>

      <PopoverContent className="w-48 p-2">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <Button
            variant="ghost"
            className="w-full justify-between"
            onClick={copyToClipboard}
          >
            <span className="flex items-center gap-2">
              {isCopied ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Link className="w-4 h-4" />
              )}
              {isCopied ? "Copied!" : "Copy Link"}
            </span>
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start gap-2"
            onClick={() => shareOnSocial("twitter")}
          >
            <Twitter className="w-4 h-4 text-blue-500" />
            Twitter
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start gap-2"
            onClick={() => shareOnSocial("linkedin")}
          >
            <Linkedin className="w-4 h-4 text-blue-700" />
            LinkedIn
          </Button>
        </motion.div>
      </PopoverContent>
    </Popover>
  );
};
