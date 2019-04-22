const reservedES3 = {
  break: true,
  continue: true,
  delete: true,
  else: true,
  for: true,
  function: true,
  if: true,
  in: true,
  new: true,
  return: true,
  this: true,
  typeof: true,
  var: true,
  void: true,
  while: true,
  with: true,
  case: true,
  catch: true,
  default: true,
  do: true,
  finally: true,
  instanceof: true,
  switch: true,
  throw: true,
  try: true
}

const reservedES5 = {
  // in addition to reservedES3
  debugger: true,
  class: true,
  enum: true,
  extends: true,
  super: true,
  const: true,
  export: true,
  import: true,
  null: true,
  true: true,
  false: true,
  implements: true,
  let: true,
  private: true,
  public: true,
  yield: true,
  interface: true,
  package: true,
  protected: true,
  static: true
}

module.exports = { reservedES3, reservedES5 }
