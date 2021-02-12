import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

import { SECTIONS } from "./sections";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: SECTIONS,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, title, imageUrl, size }) => (
          <MenuItem
            key={id}
            title={title}
            size={size}
            subtitle="SHOP NOW"
            imageUrl={imageUrl}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
