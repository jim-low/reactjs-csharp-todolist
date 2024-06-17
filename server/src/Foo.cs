public class Foo {
  public static IResult GetRandomNumbers() {
    Console.WriteLine("now in GetRandomNumbers method");
    List<float> numbers = new List<float>();

    Random rand = new Random();
    for (int i = 0; i < 69; ++i) {
      numbers.Add(rand.Next(69, 421));
    }

    return Results.Ok(numbers);
  }
}
