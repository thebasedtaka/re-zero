import {
  useAddAlbumMutation,
  useFetchAlbumsQuery,
  useRemoveAlbumMutation,
} from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePannel";
import AlbumsListItem from "./AlbumsListItem";

function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();
  const [removeAlbum, removeAlbumResults] = useRemoveAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isLoading) {
    content = <Skeleton times={3} className="h-10 w-full" />;
  } else if (error) {
    content = <div>Error loading albums</div>;
  } else {
    content = data.map((album) => {
      return <AlbumsListItem key={album.id} album={album}></AlbumsListItem>;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>

        <Button loading={results.isLoading} onClick={handleAddAlbum}>
          {" "}
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;
