// Importa a biblioteca React.
import * as React from "react"

// Importa os componentes SheetPrimitive do pacote @radix-ui/react-dialog.
import * as SheetPrimitive from "@radix-ui/react-dialog"

// Importa duas coisas - cva e VariantProps - do pacote class-variance-authority.
import { cva, type VariantProps } from "class-variance-authority"

// Importa o componente X do pacote lucide-react, provavelmente um ícone para o botão de fechar.
import { X } from "lucide-react"

// Importa a função cn de um arquivo utilitário local.
import { cn } from "@/lib/utils"

// Cria uma constante Sheet e atribui a ela o valor de SheetPrimitive.Root, o componente raiz da folha/modal.
const Sheet = SheetPrimitive.Root

// Cria uma constante SheetTrigger e atribui a ela o valor de SheetPrimitive.Trigger, responsável por acionar a folha/modal.
const SheetTrigger = SheetPrimitive.Trigger

// Cria uma constante SheetClose e atribui a ela o valor de SheetPrimitive.Close, representando um botão de fechar para a folha/modal.
const SheetClose = SheetPrimitive.Close

// Cria uma constante SheetPortal e atribui a ela o valor de SheetPrimitive.Portal, indicando que a folha/modal é renderizada em um portal.
const SheetPortal = SheetPrimitive.Portal

// Define um componente funcional SheetOverlay usando React.forwardRef. Este componente representa a sobreposição da folha/modal.
const SheetOverlay = React.forwardRef<
    React.ElementRef<typeof SheetPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>((props, ref) => (
    <SheetPrimitive.Overlay
        // Adiciona classes dinâmicas com base no estado da folha/modal.
        className={cn(
            "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            props.className
        )}
        {...props}
        ref={ref}
    />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

// Define as variantes da folha/modal usando a função cva.
const sheetVariants = cva(
    "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
    {
        variants: {
            side: {
                // Estilos para diferentes lados da folha/modal.
                top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
                bottom:
                    "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
                left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
                right:
                    "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
            },
        },
        defaultVariants: {
            side: "right",
        },
    }
)

// Define uma interface para as props do componente SheetContent.
interface SheetContentProps
    extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> { }

// Define um componente funcional SheetContent usando React.forwardRef. Este componente envolve o conteúdo da folha/modal.
const SheetContent = React.forwardRef<
    React.ElementRef<typeof SheetPrimitive.Content>,
    SheetContentProps
>((props, ref) => (
    <SheetPortal>
        <SheetOverlay />
        <SheetPrimitive.Content
            ref={ref}
            // Adiciona classes dinâmicas com base nas variantes da folha/modal.
            className={cn(sheetVariants({ side: props.side }), props.className)}
            {...props}
        >
            {props.children}
            {/* Adiciona um botão de fechar à folha/modal. */}
            <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
            </SheetPrimitive.Close>
        </SheetPrimitive.Content>
    </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

// Define um componente funcional SheetHeader representando o cabeçalho da folha/modal.
const SheetHeader = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            "flex flex-col space-y-2 text-center sm:text-left",
            className
        )}
        {...props}
    />
)
SheetHeader.displayName = "SheetHeader"

// Define um componente funcional SheetFooter representando o rodapé da folha/modal.
const SheetFooter = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
            className
        )}
        {...props}
    />
)
SheetFooter.displayName = "SheetFooter"

// Define um componente funcional SheetTitle usando React.forwardRef. Este componente representa o título da folha/modal.
const SheetTitle = React.forwardRef<
    React.ElementRef<typeof SheetPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>((props, ref) => (
    <SheetPrimitive.Title
        ref={ref}
        // Adiciona classes de estilo ao título da folha/modal.
        className={cn("text-lg font-semibold text-foreground", props.className)}
        {...props}
    />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

// Define um componente funcional SheetDescription usando React.forwardRef. Este componente representa a descrição da folha/modal.
const SheetDescription = React.forwardRef<
    React.ElementRef<typeof SheetPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>((props, ref) => (
    <SheetPrimitive.Description
        ref={ref}
        // Adiciona classes de estilo à descrição da folha/modal.
        className={cn("text-sm text-muted-foreground", props.className)}
        {...props}
    />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

// Exporta todos os componentes definidos para uso em outras partes da aplicação.
export {
    Sheet,
    SheetPortal,
    SheetOverlay,
    SheetTrigger,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription,
}
