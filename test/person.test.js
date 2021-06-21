import mocha from "mocha";
const { describe, it } = mocha;
import chai from "chai";
const { expect } = chai;
import Person from "../src/person.js";

describe("Person", () => {
  it("should return a person instance from a string", () => {
    const person = Person.generateInstanceFromString(
      "2 carro,bike 100000 2021-12-12 2022-11-12"
    );
    const expected = {
      from: "2021-12-12",
      to: "2022-11-12",
      vehicles: ["carro", "bike"],
      kmTraveled: "100000",
      id: "2",
    };
    expect(person).to.be.deep.equal(expected);
  });

  it("should return a format values", () => {
    const person = new Person({
      from: "2021-12-12",
      to: "2022-11-12",
      vehicles: ["carro", "bike"],
      kmTraveled: "100000",
      id: "2",
    });

    const expected = {
      id: 2,
      vehicles: "carro e bike",
      kmTraveled: "100.000 km",
      from: "12 de dezembro de 2021",
      to: "12 de novembro de 2022",
    };

    const result = person.formatted("pt-BR");
    expect(result).to.be.deep.equal(expected);
  });
});
