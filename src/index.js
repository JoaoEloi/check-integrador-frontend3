import React from 'react';
import ReactDOM from 'react-dom';
import './globalstyle.scss'
import App from './App';


import { Server, Model } from "miragejs";


new Server({
  models: {
    produtos: Model,
  },
  seeds(server) {
    server.create("produto", {
      title: "Produto teste",
      price: "10,99",
      description: "tentando fazer esse troço funcionar",
    });
    server.create("produto", {
      title: "Produto teste 2",
      price: "11,99",
      description: "tentando fazer esse troço funcionar",
    });
    server.create("produto", {
      title: "Produto teste 3",
      price: "12,99",
      description: "tentando fazer esse troço funcionar",
    });
  },
  routes() {
    this.namespace = "api";
    this.timing = 50;

    this.get("/produto", (schema) => {
      return schema.produtos.all();
    });

    this.post("/produto", (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      return schema.produtos.create(attrs);
    });

    this.patch("/produto/:id", (schema, request) => {
      let id = request.params.id;
      let produto = JSON.parse(request.requestBody);
      return schema.db.produtos.update(id, produto);
    });

    this.delete("/produto/:id", (schema, request) => {
      let id = request.params.id;
      return schema.produtos.find(id).destroy();
    });
  },
});

ReactDOM.render(
    <App />,
  document.getElementById('root')
);


