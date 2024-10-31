(ns app.previews
  (:require [app.db :refer [app-db]]))

(defn span-component
  "span-component represents a span component
   with a text content 'text' of background-color
   'color'"
  ([text color ]
   [:span (if (= color :keyword)
            {:style {:color (color @app-db)
                     :font-weight "bold"}}
            {:style {:color (color @app-db)}})
    (str text)])
  ([text color textdecoration]
   [:span (case textdecoration
            :selection {:style {:color (color @app-db)
                                :background (textdecoration @app-db)}}
            :cursor {:style {:color (color @app-db)
                                :background (textdecoration @app-db)}}
            {:style {:color (color @app-db)
                     :text-decoration "underline"
                     :text-decoration-style "wavy"
                     :-webkit-text-decoration "underline"
                     :-webkit-text-decoration-style "wavy"
                     :text-decoration-color (textdecoration @app-db)
                     :-webkit-text-decoration-color (textdecoration @app-db)}})
            (str text)]))

(defn preview-javascript
  []
  [:div
   [span-component "// Sieve of Eratosthenes" :comment]
   [:br]
   [:br]
   [span-component "function " :keyword]
   [span-component "eratosthenes" :functionname ]
   [span-component "(" :mainfg]
   [span-component "limit" :constant]
   [span-component ") " :mainfg]
   [span-component "{" :mainfg :cursor]
   [:br]
   [span-component "  var " :keyword]
   [span-component "primes " :variable]
   [span-component "= [];" :mainfg]
   [:br]
   [span-component "  if " :keyword]
   [span-component "(limit >= 2) {" :mainfg]
   [:br]
   [span-component "    var " :keyword]
   [span-component "sqrtlmt " :variable]
   [span-component "= " :mainfg]
   [span-component "Math" :type]
   [span-component "." :mainfg]
   [span-component "sqrt" :builtin]
   [span-component "(" :mainfg]
   [span-component "limit" :variable]
   [span-component ") - 2;" :mainfg]
   [:br]
   [span-component "    var " :keyword]
   [span-component "nums " :variable]
   [span-component "= new " :mainfg]
   [span-component "Array" :type]
   [span-component "();" :mainfg]
   [span-component " // start with an empty Array." :comment]
   [span-component " A comment that is partially selected" :comment :selection]
   [:br]
   [span-component "    for " :keyword]
   [span-component "(" :mainfg]
   [span-component "var " :keyword]
   [span-component "i " :variable]
   [span-component "= 2; " :mainfg]
   [span-component "i " :variable]
   [span-component "<= " :mainfg]
   [span-component "limit" :variable]
   [span-component "; " :mainfg]
   [span-component "i" :variable]
   [span-component "++)" :mainfg]
   [:br]
   [span-component "      nums" :variable]
   [span-component "." :mainfg]
   [span-component "push" :builtin]
   [span-component "(" :mainfg]
   [span-component "i" :variable]
   [span-component ");" :mainfg]
   [:br]
   [span-component "    for " :keyword]
   [span-component "(" :mainfg]
   [span-component "var" :keyword]
   [span-component " i " :variable]
   [span-component "= 0;" :mainfg]
   [span-component " i " :variable]
   [span-component "<= " :mainfg]
   [span-component "sqrtlmt" :variable]
   [span-component "; " :mainfg]
   [span-component "i" :variable]
   [span-component "++) {" :mainfg]
   [:br]
   [span-component "      var" :keyword]
   [span-component " p " :variable]
   [span-component "= " :mainfg]
   [span-component "nums" :variable]
   [span-component "[" :mainfg]
   [span-component "i" :variable]
   [span-component "]" :mainfg]
   [:br]
   [span-component "      if " :keyword]
   [span-component "(" :mainfg]
   [span-component "p" :variable]
   [span-component ")" :mainfg]
   [:br]
   [span-component "        for " :keyword]
   [span-component "(" :mainfg]
   [span-component "var " :keyword]
   [span-component "j " :variable]
   [span-component "= " :mainfg]
   [span-component "p " :variable]
   [span-component "* " :mainfg]
   [span-component "p " :variable]
   [span-component "- 2; " :mainfg]
   [span-component "j " :variable]
   [span-component "< " :mainfg]
   [span-component "nums" :variable]
   [span-component "." :mainfg]
   [span-component "length" :variable]
   [span-component "; " :mainfg]
   [span-component "j " :variable]
   [span-component "+= " :mainfg]
   [span-component "p" :variable]
   [span-component ")" :mainfg]
   [:br]
   [span-component "          nums" :variable]
   [span-component "[" :mainfg]
   [span-component "j" :variable]
   [span-component "] = 0;" :mainfg]
   [:br]
   [span-component "    }" :mainfg]
   [:br]
   [span-component "    for " :keyword]
   [span-component "(" :mainfg]
   [span-component "var " :keyword]
   [span-component "i " :variable]
   [span-component "= 0; " :mainfg]
   [span-component "i " :variable]
   [span-component "< " :mainfg]
   [span-component "nums" :variable]
   [span-component "." :mainfg]
   [span-component "length" :variable]
   [span-component "; " :mainfg]
   [span-component "i" :variable]
   [span-component "++) {" :mainfg]
   [:br]
   [span-component "      var " :keyword]
   [span-component "p " :variable]
   [span-component "= " :mainfg]
   [span-component "nums" :variable]
   [span-component "[" :mainfg]
   [span-component "i" :variable]
   [span-component "];" :mainfg]
   [:br]
   [span-component "      if " :keyword]
   [span-component "(" :mainfg]
   [span-component "p" :variable]
   [span-component ")" :mainfg]
   [:br]
   [span-component "        primes" :variable]
   [span-component "." :mainfg]
   [span-component "push" :builtin]
   [span-component "(" :mainfg]
   [span-component "p" :variable]
   [span-component ");" :mainfg]
   [:br]
   [span-component "    }" :mainfg]
   [:br]
   [span-component "  }" :mainfg]
   [:br]
   [span-component "  return " :keyword]
   [span-component "primes" :variable]
   [span-component ";" :mainfg]
   [:br]
   [span-component "}" :mainfg]
   [:br]
   [:br]
   [span-component "! " :warning]
   [span-component "var " :keyword]
   [span-component "primes " :variable]
   [span-component "= " :mainfg]
   [span-component "Eratosthenes" :functionname :warning]
   [span-component "(" :mainfg]
   [span-component "100" :constant]
   [span-component ");" :mainfg]
   [:br]
   [:br]
   [span-component "! " :warning]
   [span-component "var " :keyword]
   [span-component "x" :variable :warning]
   [span-component " = 2;" :mainfg]
   [:br]
   [:br]
   [span-component "console" :keyword]
   [span-component "." :mainfg]
   [span-component "log" :builtin]
   [span-component "(" :mainfg]
   [span-component "'An array of the prime numbers " :string]
   [span-component "from 0 to 100: '" :string :selection]
   [span-component "+ " :mainfg]
   [span-component "primes" :variable]
   [span-component ");" :mainfg]
   [:br]] )

(defn preview-typescript
  []
  [:div
   [span-component "import" :keyword]
   [span-component " {Theme}" :mainfg]
   [span-component " from " :keyword]
   [span-component "'./Theme'" :string]
   [span-component ";" :mainfg :cursor]
   [:br]
   [span-component "import" :keyword]
   [span-component " {Face}" :mainfg]
   [span-component " from " :keyword]
   [span-component "'./Face'" :string]
   [span-component ";" :mainfg]
   [:br]
   [span-component "import" :keyword]
   [span-component " {Injectable} " :mainfg]
   [span-component "from " :keyword]
   [span-component "'angular2/angular2'" :string]
   [span-component ";" :mainfg]
   [:br]
   [:p]
   [:p]
   [span-component "@Injectable" :type]
   [span-component "()" :mainfg]
   [:br]
   [span-component "export" :keyword]
   [span-component " class Themeservice " :type]
   [span-component "{" :mainfg]
   [:br]
   [span-component "  theme" :variable]
   [span-component ": " :mainfg]
   [span-component "Theme" :type]
   [span-component ";" :mainfg]
   [:br]
   [:br]
   [span-component "  constructor" :keyword]
   [span-component "(theme: Theme) {" :mainfg]
   [:br]
   [span-component "    this" :keyword]
   [span-component "." :mainfg]
   [span-component "theme" :variable]
   [span-component " = theme" :mainfg]
   [:br]
   [span-component "  }" :mainfg]
   [:br]
   [:br]
   [span-component "  getTheme" :functionname]
   [span-component "() : Theme {" :mainfg]
   [:br]
   [span-component "    return this" :keyword]
   [span-component "." :mainfg]
   [span-component "theme" :variable]
   [:br]
   [span-component "  }" :mainfg]
   [:br]
   [:br]
   [span-component "  setTheme" :functionname]
   [span-component "(theme: Theme) {" :mainfg]
   [:br]
   [span-component "    this" :keyword]
   [span-component "." :mainfg]
   [span-component "theme" :variable]
   [span-component " = theme" :mainfg]
   [:br]
   [span-component "  }" :mainfg]
   [:br]
   [:br]
   [span-component "  // changeColor sets one themeface of" :comment]
   [:br]
   [span-component "  // 'theme' to a given color." :comment :selection]
   [:br]
   [span-component "  changeColor" :functionname]
   [span-component "(face: Face): " :mainfg]
   [span-component "void " :type]
   [span-component "{" :mainfg]
   [:br]
   [span-component "    for" :keyword]
   [span-component " (" :mainfg]
   [span-component "var " :keyword]
   [span-component "i " :mainfg]
   [span-component "of " :keyword]
   [span-component "this" :variable]
   [span-component ".theme.faces) {" :mainfg]
   [:br]
   [span-component "      if " :keyword]
   [span-component "(i." :mainfg]
   [span-component "name " :variable]
   [span-component "== face." :mainfg]
   [span-component "name" :variable]
   [span-component ") {" :mainfg]
   [:br]
   [span-component "        i." :mainfg]
   [span-component "color" :variable]
   [span-component " = face." :mainfg]
   [span-component "color" :variable]
   [span-component ";" :mainfg]
   [:br]
   [span-component "      }" :mainfg]
   [:br]
   [span-component "    }" :mainfg]
   [:br]
   [span-component "  }" :mainfg]
   [:br]
   [span-component "}" :mainfg]])

(defn preview-ruby
  []
  [:div
   [span-component "# The Greeter class" :comment]
   [:br]
   [span-component "class " :keyword]
   [span-component "Greeter" :type]
   [:br]
   [span-component "  def " :keyword]
   [span-component "initialize" :functionname]
   [span-component "(name" :mainfg]
   [span-component ")" :mainfg :cursor]
   [:br]
   [span-component "    @name " :variable]
   [span-component "= name.capitalize" :mainfg]
   [:br]
   [span-component "  end" :keyword]
   [:br]
   [:br]
   [span-component "  def " :keyword]
   [span-component "salute" :functionname]
   [:br]
   [span-component "    puts " :builtin]
   [span-component "'Hello #{@name}'" :string]
   [:br]
   [span-component "  end" :keyword]
   [:br]
   [span-component "end" :keyword]
   [:br]
   [:br]
   [span-component "# Create a new object" :comment]
   [span-component " which is partly selected" :comment :selection]
   [:br]
   [span-component "g = " :mainfg]
   [span-component "Greeter" :type]
   [span-component ".new(" :mainfg]
   [span-component "\"world\"" :string]
   [span-component ")" :mainfg]
   [:br]
   [:br]
   [span-component "# Output \"Hello World!\"" :comment]
   [:br]
   [span-component "g.salute" :mainfg]
   [:br]
   [:br]
   [span-component "# Sieve of Eratosthenes" :comment]
   [:br]
   [:br]
   [span-component "def " :keyword]
   [span-component "eratosthenes" :functionname]
   [span-component "(n)" :mainfg]
   [:br]
   [span-component "  nums = [" :mainfg]
   [span-component "nil" :constant]
   [span-component ", " :mainfg]
   [span-component "nil" :constant]
   [span-component ", *2..n]" :mainfg]
   [:br]
   [span-component "  (2.." :mainfg]
   [span-component "Math" :type]
   [span-component ".sqrt(n)).each" :mainfg]
   [span-component " do " :keyword]
   [span-component "|i|" :mainfg]
   [:br]
   [span-component "    (i**2..n).step(i){|m| nums[m] = " :mainfg]
   [span-component "nil " :constant]
   [span-component "} " :mainfg]
   [span-component "if " :keyword]
   [span-component "nums[i]" :mainfg]
   [:br]
   [span-component "  end" :keyword]
   [:br]
   [span-component "  nums.compact" :mainfg]
   [:br]
   [span-component "end" :keyword]])

(defn preview-python
  []
  [:div
   [span-component "\"\"\"Project Euler\"\"\"" :string]
   [:br]
   [span-component "class" :keyword]
   [span-component " Euler" :type]
   [span-component ":" :mainfg]
   [:br]
   [span-component "    def " :keyword]
   [span-component "__init__" :functionname]
   [span-component "(" :mainfg]
   [span-component "self" :keyword]
   [span-component ")" :mainfg :cursor]
   [span-component ":" :mainfg]
   [:br]
   [span-component "        self" :keyword]
   [span-component ".data = []" :mainfg]
   [:br]
   [:br]
   [span-component "e " :variable]
   [span-component "= Euler()" :mainfg]
   [:br]
   [:br]
   [span-component "def " :keyword]
   [span-component "fac" :functionname]
   [span-component "(num):" :mainfg]
   [:br]
   [span-component "    \"return " :string]
   [span-component "factorial " :string :selection]
   [span-component "of number num\"" :string]
   [:br]
   [span-component "    if " :keyword]
   [span-component "num == 0:" :mainfg]
   [:br]
   [span-component "        return " :keyword]
   [span-component "1" :mainfg]
   [:br]
   [span-component "    else" :keyword]
   [span-component ":" :mainfg]
   [:br]
   [span-component "        return " :keyword]
   [span-component "num * fac(num-1)" :mainfg]
   [:br]
   [:br]
   [span-component "def " :keyword]
   [span-component "sumDigits" :functionname]
   [span-component "(num):" :mainfg]
   [:br]
   [span-component "    \"return sum of all digits in number num\"" :string]
   [:br]
   [span-component "    s " :variable]
   [span-component "= " :mainfg]
   [span-component "str" :builtin]
   [span-component "(num) " :mainfg]
   [span-component "# convert number to string of " :comment]
   [span-component "its digits." :comment :selection]
   [:br]
   [span-component "    total " :variable]
   [span-component "= 0" :mainfg]
   [:br]
   [span-component "    for " :keyword]
   [span-component "i " :mainfg]
   [span-component "in " :keyword]
   [span-component "s:" :mainfg]
   [:br]
   [span-component "        total " :variable]
   [span-component "+= " :mainfg]
   [span-component "int" :builtin]
   [span-component "(i) " :mainfg]
   [span-component "# sum int value of each digit." :comment]
   [:br]
   [span-component "    return " :keyword]
   [span-component "total" :mainfg]
   [:br]
   [:br]
   [span-component "print" :keyword]
   [span-component "(sumDigits(fac(100)))" :mainfg]])

(defn preview-c
  []
  [:div
   [span-component "/* C example */" :comment]
   [:br]
   [span-component "#include " :builtin]
   [span-component "<stddef.h>" :string]
   [:br]
   [:br]
   [span-component "#define " :builtin]
   [span-component "EPITECH_ERROR " :variable]
   [span-component "84" :mainfg]
   [:br]
   [:br]
   [span-component "static const " :keyword]
   [span-component "int " :type]
   [span-component "INT_ERROR " :variable]
   [span-component "= -1;" :mainfg]
   [:br]
   [span-component "static const " :keyword]
   [span-component "void " :type]
   [span-component "*" :mainfg]
   [span-component "PTR_ERROR " :variable]
   [span-component "= " :mainfg]
   [span-component "NULL" :constant]
   [span-component ";" :mainfg]
   [:br]
   [:br]
   [span-component "typedef struct " :keyword]
   [span-component "my_struct_s " :type]
   [span-component "{" :mainfg :cursor]
   [:br]
   [span-component "    char " :type]
   [span-component "*" :mainfg]
   [span-component "str" :variable]
   [span-component ";" :mainfg]
   [:br]
   [span-component "    int " :type]
   [span-component "len" :variable]
   [span-component ";" :mainfg]
   [:br]
   [span-component "} " :mainfg]
   [span-component "my_struct_t" :type]
   [span-component ";" :mainfg]
   [:br]
   [:br]
   [span-component "void " :type]
   [span-component "my_putchar" :functionname]
   [span-component "(" :mainfg]
   [span-component "char " :type]
   [span-component "c" :variable]
   [span-component ")" :mainfg]
   [:br]
   [span-component "{" :mainfg]
   [:br]
   [span-component "    " :mainfg]
   [span-component "write" :mainfg :warning]
   [span-component "(1, &c, 1);" :mainfg]
   [:br]
   [span-component "    return" :keyword]
   [span-component ";" :mainfg]
   [:br]
   [span-component "}" :mainfg]
   [:br]
   [:br]
   [span-component "/* A comment " :comment]
   [span-component "with selection inside" :comment :selection]
   [span-component " */" :comment]
   [:br]
   [:br]
   [span-component "int " :type]
   [span-component "main " :functionname]
   [span-component "(" :mainfg]
   [span-component "int " :type]
   [span-component "argc" :variable]
   [span-component ", " :mainfg]
   [span-component "char " :type]
   [span-component "**" :mainfg]
   [span-component "argv" :variable :warning]
   [span-component ")" :mainfg]
   [:br]
   [span-component "{" :mainfg]
   [:br]
   [span-component "    char " :type]
   [span-component "c " :variable]
   [span-component "= " :mainfg]
   [span-component "'a'" :string]
   [span-component ";" :mainfg]
   [:br]
   [span-component "    int " :type]
   [span-component "len " :variable]
   [span-component "= 0;" :mainfg]
   [:br]
   [span-component "    char " :type]
   [span-component "*" :mainfg]
   [span-component "str " :variable]
   [span-component "= " :mainfg]
   [span-component "\"This is a " :string]
   [span-component "string !\"" :string :selection]
   [span-component ";" :mainfg]
   [:br]
   [span-component "    my_struct_t " :type]
   [span-component "structure " :variable]
   [span-component "= {0};" :mainfg]
   [:br]
   [:br]
   [span-component "    structure.str = str;" :mainfg]
   [:br]
   [:br]
   [span-component "    while " :keyword]
   [span-component "(str[len] != " :mainfg]
   [span-component "'\0') {" :mainfg]
   [:br]
   [span-component "        len++;" :mainfg]
   [:br]
   [span-component "    }" :mainfg]
   [span-component "    structure.len = len;" :mainfg]
   [:br]
   [:br]
   [span-component "    return " :keyword]
   [span-component "(0):" :mainfg]
   [:br]
   [span-component "}" :mainfg]
   ])
