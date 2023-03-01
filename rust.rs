use turtle::Turtle;
fn main() {
  let mut turtle = Turtle::new();
  for x in 0..100 {
    turtle.forward(x as f64 * 1.0);
    turtle.right(x as f64 * 1.0);
  }
}
