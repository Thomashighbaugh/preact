import { h, Component } from "preact";
import style from "./style";

export default class What extends Component {
  // Note: `user` comes from the URL, courtesy of our router
  render({ user }, { time, count }) {
    return (
      <div class={style.profile}>
          <div className="card bg-dark">
        <h1>What is Preact?</h1>
        <p>
          Basically, its React.js but with less source code, taking up a
          mere 3kb of space. Like anything else, it has its benefits, like super
          fast loading and low system overhead but its also got some drawbacks,
          like needing to set up compatiability with most React libraries.
        </p>
              <div className="row col-12">
          <ul className="list-group col-5">
              <li className="list-group-item bg-dark">Pros</li>
              <li className="list-group-item bg-secondary">Dapibus ac facilisis in</li>
              <li className="list-group-item bg-secondary">Morbi leo risus</li>
              <li className="list-group-item bg-secondary">Porta ac consectetur ac</li>
              <li className="list-group-item bg-secondary">Vestibulum at eros</li>
          </ul>
                  <ul className="list-group col-5 offset-2">
                      <li className="list-group-item bg-dark">Cons</li>
                      <li className="list-group-item bg-secondary">Dapibus ac facilisis in</li>
                      <li className="list-group-item bg-secondary">Morbi leo risus</li>
                      <li className="list-group-item bg-secondary">Porta ac consectetur ac</li>
                      <li className="list-group-item bg-secondary">Vestibulum at eros</li>
                  </ul>
              </div>


          </div>
      </div>
    );
  }
}
