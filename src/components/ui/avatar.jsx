import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import PropTypes from "prop-types"
import { cn } from "@/lib/utils"

const Avatar = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props} />
))
Avatar.displayName = AvatarPrimitive.Root.displayName
Avatar.propTypes = {
  className: PropTypes.string.isRequired, // Validates className as a string
}; 

const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props} />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName
AvatarImage.propTypes = {
  className: PropTypes.string.isRequired, // Validates className as a string
};

const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props} />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName
AvatarFallback.propTypes = {
  className: PropTypes.string.isRequired, // Validates className as a string
};

export { Avatar, AvatarImage, AvatarFallback }
