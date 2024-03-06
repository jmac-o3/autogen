@AutoGen.Core.SequentialGroupChat is a group chat that invokes agents in a sequence. It's useful when you want to call multiple agents in a fixed order. For example, asking search agent to retrieve related information followed by a summarization agent to summarize the information. Beside, it also used by @AutoGen.Core.AgentExtension.SendAsync(AutoGen.Core.IAgent,AutoGen.Core.IAgent,System.String,System.Collections.Generic.IEnumerable{AutoGen.Core.IMessage},System.Int32,System.Threading.CancellationToken) in two agent chat.

### Use @AutoGen.Core.SequentialGroupChat to implement a search-summarize chat flow

```mermaid
flowchart LR
    A[User] -->|Ask a question| B[Search Agent]
    B -->|Retrieve information| C[Summarization Agent]
    C -->|Summarize result| D[Result]
```

Step 1: Create a `bingSearch` agent using @AutoGen.SemanticKernel.SemanticKernelAgent

[!code-csharp[](../../sample/AutoGen.BasicSamples/Example11_Sequential_GroupChat_Example.cs?name=CreateBingSearchAgent)]

Step 2: Create a `summarization` agent using @AutoGen.SemanticKernel.SemanticKernelAgent

[!code-csharp[](../../sample/AutoGen.BasicSamples/Example11_Sequential_GroupChat_Example.cs?name=CreateSummarizerAgent)]

Step 3: Create a `SequentialGroupChat` and add `bingSearch` and `summarization` agents to it

[!code-csharp[](../../sample/AutoGen.BasicSamples/Example11_Sequential_GroupChat_Example.cs?name=Sequential_GroupChat_Example)]

Output:

![Searcher-Summarizer](../images/articles/SequentialGroupChat/SearcherSummarizer.gif)