const supertest = require("supertest");
const app = require('../app');
const sprintBacklog = require("../models/sprintBacklog");

describe("Probar las rutas de usuario", () => {
    let userId;
    let boardId;
    let projectId;
    let productBacklogId;
    let releaseBacklogId;
    let sprintBacklogId;
    let cardId;
    let columnId;
    let token;
  
    // Para sacar el token y probar el login
    it("Debería loguearse y obtener un token", (done) => {
        supertest(app)
          .post("/login")
          .send({
              email: 'r@gmail.com',
              password: '1234'
          })
          .expect(200)
          .end(function(err, res) {
              if (err) {
                  done(err);
              } else {
                  console.log("Login response body:", res.body); 
                  token = res.body.obj; 
                  console.log("Obtained token: " + token);
                  done();
              }
          });
    });


    // - - - - - - -
    // POST
    // - - - - - - -
    

    // USER
    it("Debería de crear un nuevo usuario con datos válidos", (done) => {
      supertest(app)
        .post("/users")
        .set("Authorization", `Bearer ${token}`) 
        .send({
          password: '1234',
          email: 'test@test.test',
          name: 'Johnny',
          lastName: 'Test',
          role: 'SCRUM_MASTER'
        })
        .expect(200)
        .end(function(err, res) {
          if (err) {
            done(err);
          } else {
            userId = res.body.obj._id;
            console.log("Created user with ID: " + userId);
            done();
          }
        });
    });

    // PROJECT
    it("Debería de crear un nuevo proyecto con datos válidos", (done) => {
        supertest(app)
          .post("/projects")
          .set("Authorization", `Bearer ${token}`) 
          .send({
            name: 'Nuevo Proyecto',
            requestDate: '2024-12-01',
            startDate: '2024-12-15',
            description: 'Descripción del proyecto',
            projectManager: userId, 
            productOwner: userId, 
            developmentTeam: [userId]
          })
          .expect(200)
          .end(function(err, res) {
            if (err) {
              done(err);
            } else {
              projectId = res.body.obj._id;
              console.log("Created project with ID: " + projectId);
              done();
            }
          });
      });

    // BOARD
    it("Debería de crear un nuevo tablero con datos válidos", (done) => {
        supertest(app)
          .post("/boards")
          .set("Authorization", `Bearer ${token}`) 
          .send({
            productBacklog: null,
            releaseBacklogs: null,
            sprintsBacklogs: null
          })
          .expect(200)
          .end(function(err, res) {
            if (err) {
              done(err);
            } else {
              boardId = res.body.obj._id;
              console.log("Created board with ID: " + boardId);
              done();
            }
          });
      });

    // PRODUCTBACKLOG
    it("Debería de crear un nuevo ProductBacklog con datos válidos", (done) => {
        supertest(app)
          .post("/productBacklogs")
          .set("Authorization", `Bearer ${token}`) 
          .send({
            stories: null
          })
          .expect(200)
          .end(function(err, res) {
            if (err) {
              done(err);
            } else {
              productBacklogId = res.body.obj._id;
              console.log("Created board with ID: " + productBacklogId);
              done();
            }
          });
      });

    // CARD
    it("Debería de crear una nueva tarjeta con datos válidos", (done) => {
        supertest(app)
          .post("/cards")
          .set("Authorization", `Bearer ${token}`) 
          .send({
            description: null,
            fibonacciValue: null,
            priority: null,
            validationStatus: null,
            progressStatus: null,
            releaseBacklog: null,
            sprintBacklog: null
          })
          .expect(200)
          .end(function(err, res) {
            if (err) {
              done(err);
            } else {
              cardId = res.body.obj._id;
              console.log("Created card with ID: " + cardId);
              done();
            }
          });
      });
    
    // RELEASEBACKLOG
    it("Debería de crear un nuevo ReleaseBacklog con datos válidos", (done) => {
        supertest(app)
          .post("/releaseBacklogs")
          .set("Authorization", `Bearer ${token}`) 
          .send({
            name: null,
            sprintsBacklogs: null,
            stories: null
          })
          .expect(200)
          .end(function(err, res) {
            if (err) {
              done(err);
            } else {
              releaseBacklogId = res.body.obj._id;
              console.log("Created ReleaseBacklog with ID: " + releaseBacklogId);
              done();
            }
          });
      });

    // COLUMNS
    it("Debería de crear una nueva columna con datos válidos", (done) => {
        supertest(app)
          .post("/columns")
          .set("Authorization", `Bearer ${token}`) 
          .send({
            name: null,
            tasks: null
          })
          .expect(200)
          .end(function(err, res) {
            if (err) {
              done(err);
            } else {
              columnId = res.body.obj._id;
              console.log("Created column with ID: " + columnId);
              done();
            }
          });
      });

    // SPRINTBACKLOG
    it("Debería de crear un nuevo sprintBacklog con datos válidos", (done) => {
        supertest(app)
          .post("/sprintBacklogs")
          .set("Authorization", `Bearer ${token}`) 
          .send({
            name: null,
            releaseBacklog: null,
            toDoColumn: null,
            doingColumn: null,
            doneColumn: null,
            columns: null
          })
          .expect(200)
          .end(function(err, res) {
            if (err) {
              done(err);
            } else {
              sprintBacklogId = res.body.obj._id;
              console.log("Created sprintBacklog with ID: " + sprintBacklogId);
              done();
            }
          });
      });


    // - - - - - - -
    // GET
    // - - - - - - -


    it("Debería de devolver una lista de usuarios", (done) => {
    supertest(app)
        .get("/users")
        .set("Authorization", `Bearer ${token}`)
        .expect(200)
        .end(function(err, res) {
        if (err) {
            done(err);
        } else {
            done();
        }
        });
    });

    it("Debería de devolver una lista de tableros", (done) => {
        supertest(app)
            .get("/boards")
            .set("Authorization", `Bearer ${token}`)
            .expect(200)
            .end(function(err, res) {
            if (err) {
                done(err);
            } else {
                done();
            }
            });
        });

    it("Debería de devolver una lista de cartas", (done) => {
        supertest(app)
            .get("/cards")
            .set("Authorization", `Bearer ${token}`)
            .expect(200)
            .end(function(err, res) {
            if (err) {
                done(err);
            } else {
                done();
            }
            });
        });

    it("Debería de devolver una lista de columnas", (done) => {
        supertest(app)
            .get("/columns")
            .set("Authorization", `Bearer ${token}`)
            .expect(200)
            .end(function(err, res) {
            if (err) {
                done(err);
            } else {
                done();
            }
            });
    });

    it("Debería de devolver una lista de productBacklogs", (done) => {
        supertest(app)
            .get("/productBacklogs")
            .set("Authorization", `Bearer ${token}`)
            .expect(200)
            .end(function(err, res) {
            if (err) {
                done(err);
            } else {
                done();
            }
            });
    });

    it("Debería de devolver una lista de projects", (done) => {
        supertest(app)
            .get("/projects")
            .set("Authorization", `Bearer ${token}`)
            .expect(200)
            .end(function(err, res) {
            if (err) {
                done(err);
            } else {
                done();
            }
            });
    });

    it("Debería de devolver una lista de releaseBacklogs", (done) => {
        supertest(app)
            .get("/releaseBacklogs")
            .set("Authorization", `Bearer ${token}`)
            .expect(200)
            .end(function(err, res) {
            if (err) {
                done(err);
            } else {
                done();
            }
            });
    });

    it("Debería de devolver una lista de sprintBacklogs", (done) => {
        supertest(app)
            .get("/sprintBacklogs")
            .set("Authorization", `Bearer ${token}`)
            .expect(200)
            .end(function(err, res) {
            if (err) {
                done(err);
            } else {
                done();
            }
            });
    });


    // - - - - - - -
    // DELETE
    // - - - - - - -


    it("Debería de eliminar un usuario existente", (done) => {
    supertest(app)
        .delete(`/users/${userId}`)
        .set("Authorization", `Bearer ${token}`)
        .expect(200)
        .end(function(err, res) {
        if (err) {
            done(err);
        } else {
            done();
        }
        });
    }); 

    it("Debería de eliminar un board existente", (done) => {
        supertest(app)
            .delete(`/boards/${boardId}`)
            .set("Authorization", `Bearer ${token}`)
            .expect(200)
            .end(function(err, res) {
            if (err) {
                done(err);
            } else {
                done();
            }
            });
        }); 


    it("Debería de eliminar una carta existente", (done) => {
        supertest(app)
            .delete(`/cards/${cardId}`)
            .set("Authorization", `Bearer ${token}`)
            .expect(200)
            .end(function(err, res) {
            if (err) {
                done(err);
            } else {
                done();
            }
            });
        }); 

    it("Debería de eliminar una columna existente", (done) => {
        supertest(app)
            .delete(`/columns/${columnId}`)
            .set("Authorization", `Bearer ${token}`)
            .expect(200)
            .end(function(err, res) {
            if (err) {
                done(err);
            } else {
                done();
            }
            });
        }); 

    it("Debería de eliminar un productBacklog existente", (done) => {
        supertest(app)
            .delete(`/productBacklogs/${productBacklogId}`)
            .set("Authorization", `Bearer ${token}`)
            .expect(200)
            .end(function(err, res) {
            if (err) {
                done(err);
            } else {
                done();
            }
            });
        }); 

    it("Debería de eliminar un proyecto existente", (done) => {
        supertest(app)
            .delete(`/projects/${projectId}`)
            .set("Authorization", `Bearer ${token}`)
            .expect(200)
            .end(function(err, res) {
            if (err) {
                done(err);
            } else {
                done();
            }
            });
        });

    it("Debería de eliminar un releaseBacklog existente", (done) => {
        supertest(app)
            .delete(`/releaseBacklogs/${releaseBacklogId}`)
            .set("Authorization", `Bearer ${token}`)
            .expect(200)
            .end(function(err, res) {
            if (err) {
                done(err);
            } else {
                done();
            }
            });
        });
    
    it("Debería de eliminar un sprintBacklogs existente", (done) => {
        supertest(app)
            .delete(`/sprintBacklogs/${sprintBacklogId}`)
            .set("Authorization", `Bearer ${token}`)
            .expect(200)
            .end(function(err, res) {
            if (err) {
                done(err);
            } else {
                done();
            }
            });
        });

});
  
