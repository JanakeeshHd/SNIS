import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { SITE_CONTENT } from "@/data/content";
import { cn } from "@/lib/utils";
import logo from "@/assets/snis-logo.png";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled 
        ? "bg-primary/95 backdrop-blur-md shadow-nav-glow py-2" 
        : "bg-primary py-4"
    )}>
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={logo} 
              alt="SNIS Industries Logo" 
              className="h-12 w-auto object-contain"
            />
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className={cn(navigationMenuTriggerStyle(), "text-white")}>
                  Home
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white" onClick={() => navigate("/products")}>
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                    {SITE_CONTENT.products.categories.map((category) => (
                      <ListItem
                        key={category.id}
                        title={category.title}
                        href={`/products/${category.id}`}
                        className="hover:bg-industrial-light"
                      >
                        {category.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white" onClick={() => navigate("/industries")}>
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white">
                    {SITE_CONTENT.industries.sectors.map((sector) => (
                      <ListItem
                        key={sector.id}
                        title={sector.title}
                        href={`/industries#${sector.id}`}
                        className="hover:bg-industrial-light cursor-pointer"
                      >
                        {sector.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/about" className={cn(navigationMenuTriggerStyle(), "text-white")}>
                  About
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contact" className={cn(navigationMenuTriggerStyle(), "text-white")}>
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50 group-focus-within:text-accent transition-colors" />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="bg-white/10 border-white/10 text-white placeholder:text-white/40 rounded-full py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 w-64 transition-all"
            />
          </div>
          
          <Button 
            className="hidden md:flex bg-secondary hover:bg-accent text-white border-none shadow-glow-blue hover:shadow-glow transition-all duration-300"
            onClick={() => navigate("/contact")}
          >
            Get a Quote
          </Button>

          <button 
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-primary border-t border-white/10 animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-4 py-6 space-y-4">
            <Link 
              to="/" 
              className="block text-lg font-medium text-white hover:text-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div className="space-y-2">
              <div className="text-lg font-medium text-white">Products</div>
              <div className="grid grid-cols-1 gap-2 pl-4">
                {SITE_CONTENT.products.categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/products/${category.id}`}
                    className="text-white/70 hover:text-accent py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-lg font-medium text-white">Industries</div>
              <div className="grid grid-cols-1 gap-2 pl-4">
                {SITE_CONTENT.industries.sectors.map((sector) => (
                  <Link
                    key={sector.id}
                    to={`/industries#${sector.id}`}
                    className="text-white/70 hover:text-accent py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {sector.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link 
              to="/about" 
              className="block text-lg font-medium text-white hover:text-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block text-lg font-medium text-white hover:text-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button 
              className="w-full bg-secondary hover:bg-accent text-white"
              onClick={() => {
                navigate("/contact");
                setIsMobileMenuOpen(false);
              }}
            >
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
