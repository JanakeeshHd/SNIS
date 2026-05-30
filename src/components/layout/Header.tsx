import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, X, ChevronDown } from "lucide-react";
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
        ? "bg-white/95 backdrop-blur-md shadow-soft py-2" 
        : "bg-white py-4"
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
                <Link to="/" className={navigationMenuTriggerStyle()}>
                  Home
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger onClick={() => navigate("/products")}>
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {SITE_CONTENT.products.categories.map((category) => (
                      <ListItem
                        key={category.id}
                        title={category.title}
                        href={`/products/${category.id}`}
                      >
                        {category.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger onClick={() => navigate("/industry")}>
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {SITE_CONTENT.industries.sectors.map((sector) => (
                      <ListItem
                        key={sector.id}
                        title={sector.title}
                        href={`/industry/${sector.id}`}
                      >
                        {sector.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/about" className={navigationMenuTriggerStyle()}>
                  About Us
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contact" className={navigationMenuTriggerStyle()}>
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden xl:flex items-center">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              className="h-10 w-64 rounded-md border border-input bg-background pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <Button className="hidden md:flex bg-[#9EE493] hover:bg-[#9EE493]/90 text-[#2F4858]">
            Get Quote
          </Button>
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t p-4 space-y-4">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Link to="/products" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="pl-4 space-y-2">
                {SITE_CONTENT.products.categories.map((cat) => (
                  <Link 
                    key={cat.id} 
                    to={`/products/${cat.id}`} 
                    className="block text-muted-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Link to="/industry" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Industries</Link>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="pl-4 space-y-2">
                {SITE_CONTENT.industries.sectors.map((sector) => (
                  <Link 
                    key={sector.id} 
                    to={`/industry/${sector.id}`} 
                    className="block text-muted-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {sector.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/about" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <Link to="/contact" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            <Button className="w-full bg-[#9EE493] text-[#2F4858]">Get Quote</Button>
          </nav>
        </div>
      )}
    </header>
  );
};
