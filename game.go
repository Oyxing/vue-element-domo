package main

import "fmt"

// // fibonacci is a function that returns a function that returns an int.
func fibonacci() (func() int,func() int)  {
    a := 0
    b := 1

    f := func() int {
        s := a
        a = b
        b = s + b
        return s
    }
    ff := func() int {
        q := a 
        a = b
        b = q + b
        return q
    }
    return f,ff
}

func main() {
    // for _, dir := range tempDirs() {
	
    //     dir := dir // NOTE: necessary!
    //     fmt.Println(dir)
    //     // …
          
    //   }
    f,ff := fibonacci()
    for i := 0; i < 3; i++ {
        fmt.Println(f())
        fmt.Println(ff())
    }
}
