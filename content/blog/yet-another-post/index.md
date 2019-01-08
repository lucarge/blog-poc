---
date: '2018-12-27T23:55:00.121Z'
title: Yet another post :-)
---

Seems like there are four posts yet!

Gatsby is awesome.

### TypeScript React [snippet]

```tsx
import React from 'react'
import PropTypes from 'prop-types'

type Props = {}

const Component: React.FunctionComponent<Props> = () => (
  <p>Hello World!</p>
)

export default Component
```

### Php [snippet]

```php
<?php

function auto_copyright($year = 'auto') {
    if(intval($year) == 'auto') {
        $year = date('Y');
    }
    if(intval($year) == date('Y')) {
        echo intval($year);
    }
    if(intval($year) < date('Y')) {
        echo intval($year) . ' - ' . date('Y');
    }
    if(intval($year) > date('Y')) {
        echo date('Y');
    }
}

?>
```

### Go [snippet]

```go
package main

import (
    "fmt"
    "sync"
    "time"
)

func main() {
    total := 3

    var wg sync.WaitGroup
    wg.Add(total)

    for i := 1; i <= total; i++ {
        go longConcurrentProcess(i, &wg)
    }

    wg.Wait()
    fmt.Println("Finished")
}

func longConcurrentProcess(sleep int, wg *sync.WaitGroup) {
    defer wg.Done()

    time.Sleep(time.Duration(sleep) * time.Second)
    fmt.Println("Sleeping for", sleep, "seconds")
}
```
