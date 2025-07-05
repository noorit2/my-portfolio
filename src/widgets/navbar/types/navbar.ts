
export interface MenuItem {
    title: string;
    url: string;
    description?: string;
    icon?: React.ReactNode;
    items?: MenuItem[];
  }
export interface NavbarProps {
    logo: {
      url: string;
      title: string;
    };
    menu: MenuItem[];
    action: {
      contanct: {
        title: string;
        url: string;
      };
    };
  }

