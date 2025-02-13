import getSong from "@/action/getSong";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import Image from "next/image";
import PageContent from "./components/PageComponent";

export const revalidate = 0

export default async function Home() {

  const songs = await getSong()



  return (
    <div className="bg-black rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold ">
            Yo! Welcome to kom-kom
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4 ">
            <ListItem image="/images/prikol.jpg" name="Fav" href="fav"/>
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center ">
          <h1 className="text-white text-2xl font-semibold ">
            Newest
          </h1>
        </div>
        <PageContent song={songs} />
      </div>
    </div>
  );
}
