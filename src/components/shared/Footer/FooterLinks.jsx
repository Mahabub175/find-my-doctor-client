import { Typography } from "@material-tailwind/react";

const FooterLinks = ({ sectionData }) => {
  return (
    <div className="lg:flex">
      {sectionData?.map(({ title, links }, key) => (
        <div key={key} className="w-full">
          <Typography
            variant="h5"
            className="mb-4 font-bold text-bold text-black/70"
          >
            {title}
          </Typography>
          <ul className="space-y-1">
            {links.map((link, key) => (
              <Typography
                key={key}
                as="li"
                color="blue-gray"
                variant="small"
                className="font-normal"
              >
                <a
                  href="#"
                  className="inline-block py-1 pr-2 hover:text-primary duration-300 hover:translate-x-1"
                >
                  {link}
                </a>
              </Typography>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
