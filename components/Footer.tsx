export default function Footer() {
    return (
        <footer className="bg-muted-background">
        <div className="container mx-auto px-4 py-12 text-center">
            <p className="text-muted-foreground">
            © {new Date().getFullYear()} Kayvin Ngueeping. All rights reserved.
            </p>
        </div>
        </footer>
    )
}