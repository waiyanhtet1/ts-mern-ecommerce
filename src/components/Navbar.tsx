import { Badge } from "primereact/badge";
import { Button } from "primereact/button";
import { Menubar } from "primereact/menubar";

const Navbar = () => {
  const items = [
    {
      label: "TS-AMAZON",
    },
  ];

  const end = (
    <div className="flex align-items-center">
      <Button icon="pi pi-shopping-cart" text size="large">
        <Badge value="8" severity="danger"></Badge>
      </Button>
      <Button label="Sign In" text size="small" />
    </div>
  );

  return (
    <>
      <Menubar model={items} end={end} />
    </>
  );
};

export default Navbar;
