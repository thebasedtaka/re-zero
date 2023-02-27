import Button from "../components/Button";
import { GoBell, GoDatabase } from "react-icons/go";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button success className="mb-5">
          <GoBell />
          boom
        </Button>
      </div>
      <div>
        <Button danger rounded>
          bing
        </Button>
      </div>
      <div>
        <Button secondary outline rounded>
          bam
        </Button>
      </div>
      <div>
        <Button primary outline>
          <GoDatabase />
          bop
        </Button>
      </div>
      <div>
        <Button warning>pop</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
