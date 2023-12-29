import { useLoaderData } from "react-router-dom";
import { DetailsSide } from "../DetailsSide/DetailsSide";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { data } from "../../../../assets/data/detailsTabData";
import { GeneralInfo } from "../GeneralInfo/GeneralInfo";
import { useState } from "react";
import { DoctorReview } from "../DoctorReview/DoctorReview";

const DoctorDetails = () => {
  const doctor = useLoaderData();
  const [activeTab, setActiveTab] = useState("info");

  const handleActiveTab = (value) => {
    setActiveTab(value);
  };

  return (
    <section className="py-32 bg-grey">
      <div className="lg:flex gap-10 justify-center container mx-auto px-5 lg:px-0">
        <DetailsSide doctor={doctor} />
        <div className="max-w-[800px] mt-16 lg:mt-0">
          <Tabs id="custom-animation">
            <TabsHeader className="flex flex-col lg:flex-row">
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  className={`${
                    value === activeTab ? "text-primary" : "text-black"
                  } font-bold py-2 duration-700 mb-2 lg:mb-0`}
                  onClick={() => handleActiveTab(value)}
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
            >
              <TabPanel value="info">
                <GeneralInfo doctor={doctor} />
              </TabPanel>
              <TabPanel value="book">
                <GeneralInfo doctor={doctor} />
              </TabPanel>
              <TabPanel value="review">
                <DoctorReview />
              </TabPanel>
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
