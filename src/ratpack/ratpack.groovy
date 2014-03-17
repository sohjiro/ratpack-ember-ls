import static ratpack.groovy.Groovy.*
import static ratpack.jackson.Jackson.json
import static ratpack.jackson.Jackson.jsonNode

import ratpack.jackson.JacksonModule

ratpack {

  modules {
    register new JacksonModule()
    get(JacksonModule).prettyPrint = true
  }

  handlers {
    assets "public"

    get {
      render groovyTemplate("index.html", title: "My Ratpack App")
    }

    handler("users") {
      byMethod {
        get {
          render json( users : [] )
        }
      }
    }
  }
}
