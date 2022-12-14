bc1101tools::input_text("point-estimate",
                        label = "Point estimate: ", value = 0,
                        label_class = "text-input-label",
                        value_class = "text-input-box math",
                        value_style = "width: 3em;")
bc1101tools::input_text("standard-deviation",
                        label = "Standard deviation: ", value = 1,
                        label_class = "text-input-label",
                        value_class = "text-input-box math",
                        value_style = "width: 3em;")

bc1101tools::input_slider("n", label = "n = ", value = 30, min = 2, max = 100, width = "50%")

bc1101tools::input_slider("ci", label = "CI: ", value = 95, min = 0, max = 100, width = "50%")

print("hi")
